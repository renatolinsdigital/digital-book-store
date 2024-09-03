import useImageLoader from './useImageLoader';
import { waitFor } from '@testing-library/dom';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useImageLoader', () => {
  let originalConsoleError: any;

  beforeEach(() => {
    originalConsoleError = console.error;
    console.error = jest.fn(); // Mock console.error to suppress warnings during the test
  });

  afterEach(() => {
    console.error = originalConsoleError; // Restore original console.error
    jest.restoreAllMocks();
  });

  const anyUrl = 'any-url';

  const mockImage = ({
    src = '',
    onload = () => {},
    onerror = () => {}
  }: { src?: string; onload?: () => void; onerror?: () => void } = {}) => {
    const image = new Image();
    image.src = src;
    image.onload = onload;
    image.onerror = onerror;
    return image;
  };

  const testImageLoading = async (
    url: string,
    simulateEvent: (image: HTMLImageElement) => void,
    expectedError: string | null = ''
  ) => {
    const mockImageInstance = mockImage();
    jest.spyOn(global, 'Image').mockImplementation(() => mockImageInstance);

    const { result } = renderHook(() => useImageLoader(url));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe('');
    expect(result.current.image).toBe(null);

    await act(async () => {
      simulateEvent(mockImageInstance);
    });

    await act(async () => {
      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBe(expectedError);
        if (expectedError === null) {
          expect(result.current.image).toBeInstanceOf(HTMLImageElement);
          expect(result.current.image?.src).toContain(url);
        } else {
          expect(result.current.image).toBe(null);
        }
      });
    });
  };

  it('should render an image simulating correct url parsing', async () => {
    await testImageLoading(anyUrl, image => {
      if (image.onload) {
        image.onload(new Event('load'));
      }
    });
  });

  it('should render an image simulating wrong url parsing', async () => {
    await testImageLoading(
      anyUrl,
      image => {
        if (image.onerror) {
          image.onerror(new Event('error'));
        }
      },
      'Error loading image'
    );
  });
});

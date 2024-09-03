import { BoxProps, HasDynamicProps } from '@/shared/models';

export type ImageProps = BoxProps &
  HasDynamicProps & {
    fileName?: string;
    className?: string;
    fileExtension?: string;
    alternativeText: string;
    externalImageUrl?: string;
    $isShimmerCircular?: boolean;
  };

export interface ImageData {
  isLoading: boolean;
  error: Error | string;
  image: HTMLImageElement | null;
}

export default ImageProps;

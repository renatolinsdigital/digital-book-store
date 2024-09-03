import Shimmer from './Shimmer';
import '@testing-library/jest-dom';
import { defaultTheme } from '@/theme';
import { rgbToHex } from '@/shared/helpers';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

describe('Shimmer component', () => {
  test('renders Shimmer component correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Shimmer $minWidth={50} $minHeight={50} />
      </ThemeProvider>
    );
    const shimmerElement = screen.getByTestId('shimmer');
    expect(shimmerElement).toBeInTheDocument();
  });

  test('renders Shimmer component with circular prop, correct dimensions, and color', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Shimmer $isCircular $minWidth={50} $minHeight={50} />
      </ThemeProvider>
    );

    const shimmerBox = screen.getByTestId('shimmer-box');
    const computedStyles = window.getComputedStyle(shimmerBox);

    expect(shimmerBox).toBeInTheDocument();
    expect(computedStyles.getPropertyValue('min-width')).toBe('50px');
    expect(computedStyles.getPropertyValue('min-height')).toBe('50px');
    expect(computedStyles.getPropertyValue('border-radius')).toBe('50%');

    const hexBackgroundColor = rgbToHex(
      computedStyles.getPropertyValue('background-color')
    );
    expect(hexBackgroundColor).toBe(defaultTheme.colors.gray1);
  });
});

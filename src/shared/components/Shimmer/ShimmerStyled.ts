import { ShimmerProps } from './Shimmer.model';
import styled, { CSSObject } from 'styled-components';

const ShimmerStyled = styled.div<ShimmerProps>(
  ({
    theme,
    $width,
    $height,
    $minWidth,
    $maxWidth,
    $minHeight,
    $maxHeight
  }): CSSObject => {
    const { gray2, transparent } = theme.colors;
    return {
      '@keyframes shimmer': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' }
      },
      width: $width,
      height: $height,
      minWidth: $minWidth,
      maxWidth: $maxWidth,
      minHeight: $minHeight,
      maxHeight: $maxHeight,

      backgroundSize: '100% 100%',
      transform: 'translateX(-100%)',
      animation: 'shimmer 1.1s infinite',
      background: `linear-gradient(to right, ${transparent} 0%, ${gray2} 50%, ${transparent} 50%)`
    };
  }
);

export default ShimmerStyled;

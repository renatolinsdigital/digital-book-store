import { AllColors } from '@/theme';
import { BoxProps } from '@/shared/models';
import styled, { CSSObject } from 'styled-components';

const ImageStyled = styled.img<BoxProps>(
  ({
    theme,
    $border,
    $borderTop,
    $borderLeft,
    $borderRight,
    $borderBottom,
    $borderRadius,

    $top = 'auto',
    $left = 'auto',
    $width = 'auto',
    $height = 'auto',
    $isVisible = true,
    $maxWidth = 'auto',
    $borderWidth = '1px',
    $maxHeight = 'auto',
    $borderStyle = 'none',
    $borderColorName = 'transparent'
  }): CSSObject => {
    const { colors, variantColors } = theme;
    const allColors = { ...colors, ...variantColors };
    return {
      top: $top,
      left: $left,
      width: $width,
      height: $height,
      border: $border,
      maxWidth: $maxWidth,
      position: 'relative',
      maxHeight: $maxHeight,
      borderTop: $borderTop,
      borderLeft: $borderLeft,
      borderRight: $borderRight,
      borderStyle: $borderStyle,
      borderWidth: $borderWidth,
      borderRadius: $borderRadius,
      borderBottom: $borderBottom,
      display: $isVisible ? 'flex' : 'none',
      borderColor: allColors[$borderColorName as keyof AllColors]
    };
  }
);

export default ImageStyled;

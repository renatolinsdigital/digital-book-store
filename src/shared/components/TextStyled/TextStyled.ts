import TextProps from './TextStyled.model';
import styled, { CSSObject } from 'styled-components';
import { AllColors, FontFamilies, FontWeights, LineHeights } from '@/theme';

const TextStyled = styled.span.attrs({
  className: 'TextStyled'
})<TextProps>(
  ({
    theme,

    $top,
    $left,
    $right,
    $bottom,

    $maxWidth,
    $minWidth,
    $maxHeight,
    $minHeight,

    $overflow,
    $overflowX,
    $overflowY,

    $border,
    $borderTop,
    $borderLeft,
    $borderRight,
    $borderBottom,

    $marginTop = 0,
    $marginLeft = 0,
    $marginRight = 0,
    $marginBottom = 0,

    $paddingTop = 0,
    $paddingLeft = 0,
    $paddingRight = 0,
    $paddingBottom = 0,

    $textAlign,
    $whiteSpace,
    $borderRadius = 0,
    $isVisible = true,
    $isFlexible = false,
    hasPixelFont = false,
    $isStretched = false,
    $isInUpperCase = false,
    $isCapitalized = false,

    $flex = 'none',
    $cursor = 'inherit',
    $colorName = 'text',
    $wordWrap = 'normal',
    $position = 'static',
    $alignItems = 'center',
    $fontSizeName = 'default',
    $lineHeightName = 'small',
    $fontFamilyName = 'inherit',
    $fontWeightName = 'regular',
    $hoverColorName = $colorName,
    $justifyContent = 'flex-start',
    $borderColorName = 'transparent',
    $backgroundColorName = 'transparent',
    $hoverBackgroundColorName = 'transparent'
  }): CSSObject => {
    const {
      colors,
      fontSizes,
      fontWeights,
      fontSizesPx,
      transitions,
      lineHeights,
      fontFamilies,
      variantColors
    } = theme;

    const displayType = $isFlexible ? 'flex' : 'inline';
    const allColors = { ...colors, ...variantColors };

    const textTransform = $isInUpperCase
      ? 'uppercase'
      : $isCapitalized
        ? 'capitalize'
        : 'none';

    return {
      top: $top,
      left: $left,
      right: $right,
      bottom: $bottom,

      flex: $flex,
      cursor: $cursor,
      wordWrap: $wordWrap,

      overflow: $overflow,
      overflowX: $overflowX,
      overflowY: $overflowY,

      maxHeight: $maxHeight,
      minHeight: $minHeight,
      alignItems: $alignItems,

      paddingTop: $paddingTop,
      paddingLeft: $paddingLeft,
      paddingRight: $paddingRight,
      paddingBottom: $paddingBottom,

      marginTop: $marginTop,
      marginLeft: $marginLeft,
      marginRight: $marginRight,
      marginBottom: $marginBottom,

      border: $border,
      borderTop: $borderTop,
      borderLeft: $borderLeft,
      borderRight: $borderRight,
      borderBottom: $borderBottom,

      textTransform,
      position: $position,
      textAlign: $textAlign,
      whiteSpace: $whiteSpace,
      borderRadius: $borderRadius,
      justifyContent: $justifyContent,

      fontSize: hasPixelFont
        ? `${fontSizesPx[$fontSizeName]}px`
        : `${fontSizes[$fontSizeName]}rem`,

      transition: transitions.defaultAll,
      width: $isStretched ? '100%' : 'auto',
      height: $isStretched ? '100%' : 'auto',
      maxWidth: $maxWidth ? $maxWidth : '100%',
      display: $isVisible ? displayType : 'none',
      minWidth: $isStretched ? 'max-content' : $minWidth,
      fontFamily:
        fontFamilies[$fontFamilyName as keyof FontFamilies].join(', '),

      borderColor: allColors[$borderColorName as keyof AllColors],
      fontWeight: fontWeights[$fontWeightName as keyof FontWeights],
      lineHeight: lineHeights[$lineHeightName as keyof LineHeights],
      backgroundColor: allColors[$backgroundColorName as keyof AllColors],
      color: $colorName ? allColors[$colorName as keyof AllColors] : 'inherit',

      '&:hover': {
        color: $hoverColorName
          ? allColors[$hoverColorName as keyof AllColors]
          : 'inherit',
        backgroundColor: $hoverBackgroundColorName
          ? allColors[$hoverBackgroundColorName as keyof AllColors]
          : allColors.transparent
      }
    };
  }
);

export default TextStyled;

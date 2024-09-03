import TitleProps from './TitleStyled.model';
import { AllColors, FontFamilies } from '@/theme';
import styled, { CSSObject } from 'styled-components';

const TitleStyled = styled.h1.attrs({
  className: 'TitleStyled'
})<TitleProps>(
  ({
    theme,
    $maxWidth,
    $minWidth,
    $maxHeight,
    $minHeight,
    $textAlign,
    $flex = 'auto',

    $marginTop = 0,
    $marginLeft = 0,
    $marginRight = 0,
    $marginBottom = 0,

    $paddingTop = 0,
    $paddingLeft = 0,
    $paddingRight = 0,
    $paddingBottom = 0,

    $isVisible = true,
    $isFlexible = false,
    $isStretched = true,
    hasPixelFont = false,
    $isInUpperCase = true,

    $colorName = 'heading',
    $overflowX = 'visible',
    $overflowY = 'visible',
    $alignItems = 'center',
    $fontWeightName = 'bold',
    $fontSizeName = 'default',
    $justifyContent = 'center',
    $lineHeightName = 'default',
    $fontFamilyName = 'heading1'
  }): CSSObject => {
    const {
      colors,
      fontSizes,
      fontSizesPx,
      lineHeights,
      fontWeights,
      fontFamilies,
      variantColors
    } = theme;

    const displayType = $isFlexible ? 'flex' : 'inline';
    const allColors = { ...colors, ...variantColors };

    return {
      overflowX: $overflowX,
      overflowY: $overflowY,
      alignItems: $alignItems,
      fontFamily:
        fontFamilies[$fontFamilyName as keyof FontFamilies].join(', '),

      maxHeight: $maxHeight,
      minHeight: $minHeight,
      paddingTop: $paddingTop,
      paddingLeft: $paddingLeft,
      paddingRight: $paddingRight,
      paddingBottom: $paddingBottom,

      marginTop: $marginTop,
      marginLeft: $marginLeft,
      marginRight: $marginRight,
      marginBottom: $marginBottom,

      textWrap: 'nowrap',
      textAlign: $textAlign,
      justifyContent: $justifyContent,
      fontWeight: fontWeights[$fontWeightName],
      lineHeight: lineHeights[$lineHeightName],
      color: allColors[$colorName as keyof AllColors],

      fontSize: hasPixelFont
        ? `${fontSizesPx[$fontSizeName]}px`
        : `${fontSizes[$fontSizeName]}rem`,

      flex: $isStretched ? $flex : 'none',
      width: $isStretched ? '100%' : 'auto',
      maxWidth: $maxWidth ? $maxWidth : '100%',
      display: $isVisible ? displayType : 'none',
      minWidth: $isStretched ? 'max-content' : $minWidth,
      textTransform: $isInUpperCase ? 'uppercase' : 'none'
    };
  }
);

export default TitleStyled;

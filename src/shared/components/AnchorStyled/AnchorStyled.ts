import styled, { CSSObject } from 'styled-components';
import { ReactActionEvent, TextElementProps } from '@/shared/models';
import { AllColors, FontFamilies, FontWeights, LineHeights } from '@/theme';

const AnchorStyled = styled.a.attrs({
  className: 'AnchorStyled'
})<TextElementProps & { onClick?(event?: ReactActionEvent): void }>(
  ({
    theme,
    $hasUnderline,
    $isInUpperCase,

    $marginTop = 0,
    $marginLeft = 0,
    $marginRight = 0,
    $marginBottom = 0,

    $paddingTop = 0,
    $paddingLeft = 0,
    $paddingRight = 0,
    $paddingBottom = 0,

    $flex = 'none',
    $cursor = 'pointer',
    $colorName = 'dark',
    $isFlexible = false,
    hasPixelFont = false,

    $wordWrap = 'normal',
    $position = 'static',
    $alignItems = 'center',
    $fontFamilyName = 'link',
    $fontSizeName = 'default',
    $lineHeightName = 'small',
    $fontWeightName = 'regular',
    $textUnderlineOffset = '4px',
    $justifyContent = 'flex-start',
    $hoverColorName = 'primaryDefault'
  }): CSSObject => {
    const {
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      fontSizesPx,
      transitions,
      fontFamilies,
      variantColors
    } = theme;

    const allColors = { ...colors, ...variantColors };

    return {
      flex: $flex,
      cursor: $cursor,
      alignItems: $alignItems,

      position: $position,
      wordWrap: $wordWrap,
      marginTop: $marginTop,
      marginLeft: $marginLeft,
      marginRight: $marginRight,
      marginBottom: $marginBottom,

      paddingTop: $paddingTop,
      paddingLeft: $paddingLeft,
      paddingRight: $paddingRight,
      paddingBottom: $paddingBottom,

      fontSize: hasPixelFont
        ? `${fontSizesPx[$fontSizeName]}px`
        : `${fontSizes[$fontSizeName]}rem`,

      justifyContent: $justifyContent,
      display: $isFlexible ? 'flex' : 'inline',
      fontWeight: fontWeights[$fontWeightName as keyof FontWeights],
      lineHeight: lineHeights[$lineHeightName as keyof LineHeights],

      transition: transitions.defaultAll,
      textUnderlineOffset: $textUnderlineOffset,
      color: allColors[$colorName as keyof AllColors],
      textDecoration: $hasUnderline ? 'underline' : 'none',
      textTransform: $isInUpperCase ? 'uppercase' : 'none',
      fontFamily:
        fontFamilies[$fontFamilyName as keyof FontFamilies].join(', '),

      '&:hover': {
        color: allColors[$hoverColorName as keyof AllColors]
      }
    };
  }
);

export default AnchorStyled;

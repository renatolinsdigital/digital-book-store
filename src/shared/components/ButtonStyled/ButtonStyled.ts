import styled, { CSSObject } from 'styled-components';
import { ButtonStyledProps } from './ButtonStyled.model';
import { AllColors, FontSizes, FontWeights } from '@/theme';

const ButtonStyled = styled.button<ButtonStyledProps>(
  ({
    $top,
    $left,
    $right,
    $bottom,

    $marginTop = 0,
    $marginLeft = 0,
    $marginRight = 0,
    $marginBottom = 0,

    $paddingTop = 0,
    $paddingLeft = 0,
    $paddingRight = 0,
    $paddingBottom = 0,

    theme,
    $width,
    $height,
    $isLoading,

    $minWidth,
    $maxWidth,
    $minHeight,
    $maxHeight,

    $isEnabled = true,
    $isVisible = true,
    $borderRadius = 4,
    hasPixelFont = false,
    $isInUpperCase = false,

    $position = 'static',
    $borderWidth = '1px',
    $borderStyle = 'none',
    $fontSizeName = 'default',
    $fontWeightName = 'regular',

    $colorName = 'buttonText',
    $hoverChildrenImageFilter,
    $hoverChildrenSvgColorName,
    $hoverColorName = 'buttonText',
    $borderColorName = 'transparent',
    $disabledBackgroundColorName = 'gray5',
    $backgroundColorName = 'buttonBackground',
    $hoverChildBorderColorName = 'transparent',
    $disabledChildBorderColorName = 'transparent',
    $hoverBackgroundColorName = 'buttonBackgroundHover'
  }): CSSObject => {
    const {
      colors,
      fontSizes,
      transitions,
      fontWeights,
      fontSizesPx,
      variantColors
    } = theme;

    const allColors = { ...colors, ...variantColors };

    const enabledBackGroundColor = $isLoading
      ? allColors[$hoverBackgroundColorName as keyof AllColors]
      : allColors[$backgroundColorName as keyof AllColors];

    const disabledBackGroundColor =
      allColors[$disabledBackgroundColorName as keyof AllColors];

    return {
      top: $top,
      left: $left,
      right: $right,
      bottom: $bottom,
      position: $position,

      width: $width,
      height: $height,
      minWidth: $minWidth,
      maxWidth: $maxWidth,
      minHeight: $minHeight,
      maxHeight: $maxHeight,

      borderStyle: $borderStyle,
      borderWidth: $borderWidth,
      borderRadius: $borderRadius,

      marginTop: $marginTop,
      marginLeft: $marginLeft,
      marginRight: $marginRight,
      marginBottom: $marginBottom,

      paddingTop: $paddingTop,
      paddingLeft: $paddingLeft,
      paddingRight: $paddingRight,
      paddingBottom: $paddingBottom,

      userSelect: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      transition: transitions.defaultAll,
      display: $isVisible ? 'flex' : 'none',
      textTransform: $isInUpperCase ? 'uppercase' : 'none',
      cursor: $isEnabled && !$isLoading ? 'pointer' : 'default',
      fontWeight: fontWeights[$fontWeightName as keyof FontWeights],

      fontSize: hasPixelFont
        ? `${fontSizesPx[$fontSizeName as keyof FontSizes]}px`
        : `${fontSizes[$fontSizeName as keyof FontSizes]}rem`,

      color: allColors[$colorName as keyof AllColors],
      borderColor: allColors[$borderColorName as keyof AllColors],
      backgroundColor: $isEnabled
        ? enabledBackGroundColor
        : disabledBackGroundColor,

      ' div': {
        borderColor: $isEnabled
          ? undefined
          : allColors[$disabledChildBorderColorName as keyof AllColors]
      },

      ' img': {
        filter: !$isEnabled ? 'grayscale(100%)' : 'none',
        transition: transitions.defaultAll
      },

      '&:hover': {
        color: $isEnabled
          ? allColors[$hoverColorName as keyof AllColors]
          : colors.white,
        backgroundColor: $isEnabled
          ? allColors[$hoverBackgroundColorName as keyof AllColors]
          : allColors[$disabledBackgroundColorName as keyof AllColors],
        ' *': {
          borderColor: $isEnabled
            ? allColors[$hoverChildBorderColorName as keyof AllColors]
            : allColors[$disabledChildBorderColorName as keyof AllColors]
        },
        ' img': {
          filter: $isEnabled ? $hoverChildrenImageFilter : 'grayscale(100%)'
        },
        ' svg, path': {
          fill: $hoverChildrenSvgColorName
            ? allColors[$hoverChildrenSvgColorName as keyof AllColors]
            : undefined
        }
      }
    };
  }
);

export default ButtonStyled;

import styled, { CSSObject } from 'styled-components';
import { AllColors, FontSizes, FontWeights, LineHeights } from '@/theme';
import {
  TextInputStyledProps,
  TextInputContainerStyledProps
} from './TextInputStyled.model';

export const TextInputContainerStyled =
  styled.div<TextInputContainerStyledProps>(
    ({
      $flex,
      $maxWidth,
      $minWidth,
      $maxHeight,
      $minHeight,
      $marginTop,
      $marginLeft,
      $marginRight,
      $marginBottom
    }): CSSObject => {
      return {
        flex: $flex,
        width: '100%',
        display: 'flex',
        position: 'relative',

        maxWidth: $maxWidth,
        minWidth: $minWidth,
        maxHeight: $maxHeight,
        minHeight: $minHeight,

        marginTop: $marginTop,
        marginLeft: $marginLeft,
        marginRight: $marginRight,
        marginBottom: $marginBottom,

        svg: {
          width: 18,
          height: 18
        }
      };
    }
  );

export const TextInputStyled = styled.input<TextInputStyledProps>(
  ({
    $flex,
    theme,

    $maxWidth,
    $minWidth,
    $maxHeight,
    $minHeight,

    $paddingTop,
    $paddingLeft,
    $paddingRight,
    $paddingBottom,

    $borderRadius,
    $textAlign = 'left',
    $borderWidth = '1px',
    hasPixelFont = false,
    $borderStyle = 'none',
    $textColorName = 'text',
    $onFocusBorderColorName,
    $hasFocusOutline = false,
    $fontSizeName = 'default',
    $lineHeightName = 'default',
    $fontWeightName = 'regular',
    $backgroundColorName = 'white',
    $placeHolderColorName = 'gray3',
    $borderColorName = 'transparent'
  }): CSSObject => {
    const {
      colors,
      fontSizes,
      transitions,
      fontSizesPx,
      lineHeights,
      fontWeights,
      variantColors
    } = theme;

    const allColors = { ...colors, ...variantColors };

    return {
      flex: $flex,
      display: 'flex',
      maxWidth: $maxWidth,
      minWidth: $minWidth,
      maxHeight: $maxHeight,
      minHeight: $minHeight,

      textAlign: $textAlign,
      borderStyle: $borderStyle,
      borderWidth: $borderWidth,
      borderRadius: $borderRadius,

      paddingTop: $paddingTop,
      paddingLeft: $paddingLeft,
      paddingRight: $paddingRight,
      paddingBottom: $paddingBottom,

      transition: transitions.defaultAll,
      color: allColors[$textColorName as keyof AllColors],
      borderColor: allColors[$borderColorName as keyof AllColors],
      lineHeight: lineHeights[$lineHeightName as keyof LineHeights],
      fontWeight: fontWeights[$fontWeightName as keyof FontWeights],
      backgroundColor: allColors[$backgroundColorName as keyof AllColors],

      fontSize: hasPixelFont
        ? `${fontSizesPx[$fontSizeName as keyof FontSizes]}px`
        : `${fontSizes[$fontSizeName as keyof FontSizes]}rem`,

      '&:focus': {
        outline: $hasFocusOutline ? 'solid' : 'none',
        borderColor: allColors[$onFocusBorderColorName as keyof AllColors]
      },

      '&::placeholder': {
        /* Chrome, Firefox, Opera, Safari 10.1+ */ color:
          allColors[$placeHolderColorName as keyof AllColors],
        opacity: 1 /* Firefox */
      },
      '&:-ms-input-placeholder': {
        /* Internet Explorer 10-11 */ color:
          allColors[$placeHolderColorName as keyof AllColors]
      },
      '&::-ms-input-placeholder': {
        /* Microsoft Edge */ color:
          allColors[$placeHolderColorName as keyof AllColors]
      }
    };
  }
);

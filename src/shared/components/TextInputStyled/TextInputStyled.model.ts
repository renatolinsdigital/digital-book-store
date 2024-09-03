import { DefaultTheme } from 'styled-components';
import { AllColors, FontSizes, FontWeights, LineHeights } from '@/theme';
import { BoxProps, ReactInputEvent, TextAlignments } from '@/shared/models';

export interface CommonStyledProps {
  theme: DefaultTheme;
  $flex?: number | string;
  $maxWidth?: number | string;
  $minWidth?: number | string;
  $maxHeight?: number | string;
  $minHeight?: number | string;
  $textColorName?: keyof AllColors;
  $placeHolderColorName?: keyof AllColors;
}

export type TextInputContainerStyledProps = CommonStyledProps & {
  $marginTop?: string | number;
  $marginLeft?: string | number;
  $marginRight?: string | number;
  $marginBottom?: string | number;
};

export type TextInputStyledProps = CommonStyledProps &
  BoxProps & {
    hasPixelFont?: boolean;
    $hasFocusOutline?: boolean;
    $placeHolderColor?: string;
    $textAlign?: TextAlignments;
    $fontSizeName?: keyof FontSizes;
    $lineHeightName?: keyof LineHeights;
    $fontWeightName?: keyof FontWeights;
    onBlur?(event?: ReactInputEvent): void;
    $onFocusBorderColorName?: keyof AllColors;
  };

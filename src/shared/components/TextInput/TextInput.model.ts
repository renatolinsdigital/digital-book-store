import { ReactNode } from 'react';
import { AllColors, FontSizes, FontWeights, LineHeights } from '@/theme';
import { BoxProps, ReactInputEvent, TextAlignments } from '@/shared/models';

type InputEvents = {
  onENTERPressed?(): void;
  onBlur?(event?: ReactInputEvent): void;
  onKeyUp?(event?: ReactInputEvent): void;
  onChange?(event?: ReactInputEvent): void;
  onKeyDown?(event?: ReactInputEvent): void;
};

type CustomInputProps = {
  $name?: string;
  $flex?: number;
  $value?: string;
  $maxLength?: number;
  $textColor?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  $isReadOnly?: boolean;
  $placeHolder?: string;
  $isDisabled?: boolean;
  $hasFocusOutline?: boolean;
  $placeHolderColor?: string;
  $textAlign?: TextAlignments;
  $fontSizeName?: keyof FontSizes;
  $textColorName?: keyof AllColors;
  $fontWeightName?: keyof FontWeights;
  $lineHeightName?: keyof LineHeights;
  $placeHolderColorName?: keyof AllColors;
  $onFocusBorderColorName?: keyof AllColors;
  restriction: 'none' | 'onlyNumbers' | 'onlyLetters';
};

export type TextInputProps = Omit<BoxProps, 'theme'> &
  InputEvents &
  CustomInputProps;

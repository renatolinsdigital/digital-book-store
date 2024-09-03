import { ReactActionEvent } from '@/shared/models';
import { AllColors, FontSizes, FontWeights } from '@/theme';

export interface ButtonEvents {
  onClick?(event?: ReactActionEvent): void;
  onMouseDown?(event?: ReactActionEvent): void;
}

export interface CustomButtonProps {
  $isLoading?: boolean;
  $isEnabled?: boolean;
  hasPixelFont?: boolean;
  $isInUpperCase?: boolean;
  $hoverChildrenImageFilter?: string;

  $fontSizeName?: keyof FontSizes;
  $fontWeightName?: keyof FontWeights;
  $hoverChildrenSvgColorName?: keyof AllColors;
  $hoverChildBorderColorName?: keyof AllColors;
  $disabledBackgroundColorName?: keyof AllColors;
  $disabledChildBorderColorName?: keyof AllColors;
}

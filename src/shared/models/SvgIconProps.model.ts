import { AllColors } from '@/theme';

export interface SvgIconProps {
  id?: string;
  title?: string;

  x?: number | string;
  y?: number | string;

  $width?: number | string;
  $height?: number | string;

  $isVisible?: boolean;
  $rotationDegrees?: number;
  $colorName?: keyof AllColors;

  $marginTop?: number | string;
  $marginLeft?: number | string;
  $marginRight?: number | string;
  $marginBottom?: number | string;

  $paddingTop?: number | string;
  $paddingLeft?: number | string;
  $paddingRight?: number | string;
  $paddingBottom?: number | string;
}

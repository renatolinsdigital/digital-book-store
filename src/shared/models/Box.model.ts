import { AllColors } from '@/theme';
import { Cursor } from './Cursor.model';
import { AlignItems } from './AlignItems.model';
import { DefaultTheme } from 'styled-components';
import { BoxPositions } from './BoxPositions.model';
import { JustifyContent } from './JustifyContent.model';

export interface BoxProps {
  id?: string;
  $cursor?: Cursor;
  $transform?: string;
  $isVisible?: boolean;
  theme?: DefaultTheme;

  $top?: number | string;
  $left?: number | string;
  $right?: number | string;
  $width?: string | number;
  $height?: string | number;

  $position?: BoxPositions;
  $bottom?: number | string;
  $borderRadius?: number | string;

  $minWidth?: number | string;
  $maxWidth?: number | string;
  $minHeight?: number | string;
  $maxHeight?: number | string;

  $marginTop?: number | string;
  $marginLeft?: number | string;
  $marginRight?: number | string;
  $marginBottom?: number | string;

  $paddingTop?: number | string;
  $paddingLeft?: number | string;
  $paddingRight?: number | string;
  $paddingBottom?: number | string;

  $border?: string;
  $borderTop?: string;
  $borderLeft?: string;
  $borderRight?: string;
  $borderBottom?: string;
  $isStretched?: boolean;
  $flex?: number | string;
  $alignItems?: AlignItems;
  $isFlexWrapping?: boolean;

  $verticalBreakPoint?: number;
  $justifyContent?: JustifyContent;

  $colorName?: keyof AllColors;
  $hoverColorName?: keyof AllColors;
  $borderColorName?: keyof AllColors;
  $backgroundColorName?: keyof AllColors;
  $hoverBackgroundColorName?: keyof AllColors;

  $borderStyle?:
    | 'none'
    | 'solid'
    | 'inset'
    | 'ridge'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'dashed'
    | 'outset'
    | 'hidden';

  $overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  $overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
  $overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';

  $borderWidth?:
    | string
    | number
    | 'thin'
    | 'thick'
    | 'length'
    | 'medium'
    | 'initial'
    | 'inherit';

  $flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

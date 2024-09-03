import { AllColors } from '@/theme';
import { DefaultTheme } from 'styled-components';
import { Cursor } from '@/shared/models/Cursor.model';
import { AlignItems } from '@/shared/models/AlignItems.model';
import { BoxPositions } from '@/shared/models/BoxPositions.model';
import { JustifyContent } from '@/shared/models/JustifyContent.model';

interface BoxStyledProps {
  id?: string;
  $gap?: string;
  $cursor?: Cursor;
  $transform?: string;
  $isVisible?: boolean;
  theme?: DefaultTheme;

  $border?: string;
  $borderTop?: string;
  $borderLeft?: string;
  $borderRight?: string;
  $borderBottom?: string;

  $top?: number | string;
  $left?: number | string;
  $right?: number | string;
  $bottom?: number | string;

  $maxWidth?: number | string;
  $minWidth?: number | string;
  $maxHeight?: number | string;
  $minHeight?: number | string;

  $marginTop?: number | string;
  $marginLeft?: number | string;
  $marginRight?: number | string;
  $marginBottom?: number | string;

  $paddingTop?: number | string;
  $paddingLeft?: number | string;
  $paddingRight?: number | string;
  $paddingBottom?: number | string;

  $gridRow?: string;
  $gridColumn?: string;
  $isStretched?: boolean;
  $flex?: number | string;
  $position?: BoxPositions;
  $alignSelf?: any;
  $alignItems?: AlignItems;
  $isFlexWrapping?: boolean;
  $verticalBreakPoint?: number;
  $borderRadius?: number | string;
  $justifyContent?: JustifyContent;

  $borderColorName?: keyof AllColors;
  $backgroundColorName?: keyof AllColors;

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

export default BoxStyledProps;

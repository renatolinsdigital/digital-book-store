import { BoxProps } from './Box.model';
import { TextAlignments } from './TextAlignments.model';
import { FontFamilies, FontSizes, FontWeights, LineHeights } from '@/theme';

export type TextElementProps = BoxProps & {
  $wordWrap?: 'normal' | 'break-word' | 'initial' | 'inherit';

  $whiteSpace?:
    | 'pre'
    | 'normal'
    | 'nowrap'
    | 'initial'
    | 'inherit'
    | 'pre-wrap'
    | 'pre-line'
    | 'break-spaces';

  $alignItems?: string;
  $isFlexible?: boolean;
  $isStretched?: boolean;
  hasPixelFont?: boolean;
  $flex?: number | string;
  $hasUnderline?: boolean;
  $isInUpperCase?: boolean;
  $isCapitalized?: boolean;
  $textAlign?: TextAlignments;
  $fontSizeName?: keyof FontSizes;
  $lineHeightName?: keyof LineHeights;
  $fontWeightName?: keyof FontWeights;
  $fontFamilyName?: keyof FontFamilies;
  $textUnderlineOffset?: 'auto' | number | string;
};

import { defaultTheme, lightColors } from './defaultTheme';

type VariantColors = typeof lightColors;
type Colors = typeof defaultTheme.colors;

export type AllColors = Colors & VariantColors;
export type FontSizes = typeof defaultTheme.fontSizes;
export type FontWeights = typeof defaultTheme.fontWeights;
export type LineHeights = typeof defaultTheme.lineHeights;
export type FontFamilies = typeof defaultTheme.fontFamilies;

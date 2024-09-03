import BoxStyledProps from './BoxStyled.model';
import styled, { CSSObject } from 'styled-components';

const BoxStyled = styled.div.attrs({
  className: 'BoxStyled'
})<BoxStyledProps>(
  ({
    $gap,
    $top,
    $left,
    $right,
    $bottom,

    theme,
    $cursor,
    $flex = 1,

    $gridRow,
    $gridColumn,

    $overflow,
    $overflowX,
    $overflowY,
    $transform,

    $maxWidth,
    $maxHeight,
    $minWidth = 0,
    $minHeight = 'auto',

    $border,
    $borderTop,
    $borderLeft,
    $borderRight,
    $borderBottom,
    $borderRadius = 0,

    $paddingTop = 0,
    $paddingLeft = 0,
    $paddingRight = 0,
    $paddingBottom = 0,

    $marginTop = 0,
    $marginLeft = 0,
    $marginRight = 0,
    $marginBottom = 0,

    $alignSelf,
    $borderWidth,
    $isVisible = true,
    $isStretched = true,
    $flexDirection = 'row',
    $position = 'relative',

    $verticalBreakPoint,
    $borderStyle = 'solid',
    $alignItems = 'center',
    $isFlexWrapping = false,
    $justifyContent = 'center',
    $borderColorName = 'transparent',
    $backgroundColorName = 'transparent'
  }): CSSObject => {
    const { colors } = theme;

    return {
      gap: $gap,
      top: $top,
      left: $left,
      right: $right,
      bottom: $bottom,

      cursor: $cursor,
      overflow: $overflow,
      position: $position,
      alignSelf: $alignSelf,

      overflowX: $overflowX,
      overflowY: $overflowY,

      gridRow: $gridRow,
      gridColumn: $gridColumn,

      border: $border,
      borderTop: $borderTop,
      borderLeft: $borderLeft,
      borderRight: $borderRight,
      borderBottom: $borderBottom,

      paddingTop: $paddingTop,
      paddingLeft: $paddingLeft,
      paddingRight: $paddingRight,
      paddingBottom: $paddingBottom,

      marginTop: $marginTop,
      marginLeft: $marginLeft,
      marginRight: $marginRight,
      marginBottom: $marginBottom,

      transform: $transform,
      alignItems: $alignItems,
      borderStyle: $borderStyle,
      borderWidth: $borderWidth,
      borderRadius: $borderRadius,
      flexDirection: $flexDirection,
      justifyContent: $justifyContent,

      minWidth: $minWidth,
      minHeight: $minHeight,
      maxWidth: $maxWidth ?? '100%',
      maxHeight: $maxHeight ?? 'auto',

      flex: $isStretched ? $flex : 'none',
      width: $isStretched ? '100%' : 'auto',
      display: $isVisible ? 'flex' : 'none',
      borderColor: colors[$borderColorName as keyof typeof colors],

      height: $isStretched ? '100%' : 'auto',
      flexWrap: $isFlexWrapping ? 'wrap' : 'nowrap',

      ...($verticalBreakPoint && {
        [`@media(max-width: ${$verticalBreakPoint}px)`]: {
          flexDirection: 'column'
        }
      }),

      backgroundColor: colors[$backgroundColorName as keyof typeof colors]
    };
  }
);

export default BoxStyled;

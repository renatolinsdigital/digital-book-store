import styled from 'styled-components';
import GridContainerStyledProps from './GridContainerStyled.model';

const GridContainerStyled = styled.div.attrs({
  className: 'GridContainerStyled'
})<GridContainerStyledProps>(
  ({
    $gap = 0,

    $maxWidth,
    $maxHeight,
    $minWidth = 0,
    $minHeight = 'auto',

    $paddingTop = 0,
    $paddingLeft = 0,
    $paddingRight = 0,
    $paddingBottom = 0,

    $marginTop = 0,
    $marginLeft = 0,
    $marginRight = 0,
    $marginBottom = 0,

    $gridTemplateRows = '1fr',
    $gridTemplateColumns = '1rf'
  }) => ({
    gap: $gap,
    width: '100%',
    display: 'grid',

    minWidth: $minWidth,
    minHeight: $minHeight,
    maxWidth: $maxWidth ?? '100%',
    maxHeight: $maxHeight ?? 'auto',

    paddingTop: $paddingTop,
    paddingLeft: $paddingLeft,
    paddingRight: $paddingRight,
    paddingBottom: $paddingBottom,

    marginTop: $marginTop,
    marginLeft: $marginLeft,
    marginRight: $marginRight,
    marginBottom: $marginBottom,

    gridTemplateRows: $gridTemplateRows,
    gridTemplateColumns: $gridTemplateColumns
  })
);

export default GridContainerStyled;

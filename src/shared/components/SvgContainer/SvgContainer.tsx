import SvgContainerProps from './SvgContainer.model';
import SvgContainerStyled from './SvgContainer.styled';

function SvgContainer({
  x,
  y,
  id,

  $width,
  $height,

  viewBox,
  children,
  $isVisible,

  $marginTop,
  $marginLeft,
  $marginRight,
  $marginBottom,

  $paddingTop,
  $paddingLeft,
  $paddingRight,
  $paddingBottom,

  $rotationDegrees,
  isFlipped = false
}: SvgContainerProps) {
  const DEFAULT_DIMENSION = 20;

  const flipTransform = isFlipped ? 'scaleX(-1)' : '';
  const rotationTransform = `${$rotationDegrees ? `rotate(${$rotationDegrees}deg)` : 'rotate(0deg)'}`;

  const styles = {
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    display: $isVisible ? 'flex' : 'none',
    transform: `${flipTransform} ${rotationTransform}`,

    marginTop: $marginTop,
    marginLeft: $marginLeft,
    marginRight: $marginRight,
    marginBottom: $marginBottom,

    paddingTop: $paddingTop,
    paddingLeft: $paddingLeft,
    paddingRight: $paddingRight,
    paddingBottom: $paddingBottom
  };

  return (
    <SvgContainerStyled
      x={x}
      y={y}
      id={id}
      style={styles}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width={$width || DEFAULT_DIMENSION}
      height={$height || DEFAULT_DIMENSION}
      viewBox={viewBox || `0 0 ${DEFAULT_DIMENSION} ${DEFAULT_DIMENSION}`}>
      {children}
    </SvgContainerStyled>
  );
}

export default SvgContainer;

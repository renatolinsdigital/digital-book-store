import { ButtonProps } from './Button.model';
import BoxStyled from '../BoxStyled/BoxStyled';
import ButtonStyled from '../ButtonStyled/ButtonStyled';
import ActionLoading from '../../animations/ActionLoading/ActionLoading';

function Button({
  id,
  $top,
  $left,
  $right,
  $bottom,

  $width,
  children,
  $minWidth,
  $maxWidth,
  $minHeight,
  $maxHeight,

  $marginTop,
  $marginLeft,
  $marginRight,
  $marginBottom,

  $paddingTop,
  $paddingLeft,
  $paddingRight,
  $paddingBottom,

  $borderWidth,
  $borderStyle,
  $borderRadius,
  $borderColorName,

  $position,
  $isVisible,
  $fontSizeName,
  $fontWeightName,

  hasPixelFont,
  $isEnabled = true,
  $isLoading = false,
  $isInUpperCase = false,

  $colorName,
  $hoverColorName,
  $backgroundColorName,
  $hoverChildrenImageFilter,
  $hoverBackgroundColorName,
  $hoverChildBorderColorName,
  $hoverChildrenSvgColorName,
  $disabledBackgroundColorName,
  $disabledChildBorderColorName,

  onClick,
  onMouseDown
}: ButtonProps) {
  const handleClick = () => {
    if (onClick && !$isLoading) onClick();
  };

  const handleMouseDown = () => {
    if (onMouseDown) onMouseDown();
  };

  return (
    <ButtonStyled
      id={id}
      $top={$top}
      $left={$left}
      $width={$width}
      $right={$right}
      $bottom={$bottom}
      $position={$position}
      $minWidth={$minWidth}
      $maxWidth={$maxWidth}
      disabled={!$isEnabled}
      $isLoading={$isLoading}
      $minHeight={$minHeight}
      $maxHeight={$maxHeight}
      $isVisible={$isVisible}
      $isEnabled={$isEnabled}
      $colorName={$colorName}
      $marginTop={$marginTop}
      $paddingTop={$paddingTop}
      $marginLeft={$marginLeft}
      hasPixelFont={hasPixelFont}
      $marginRight={$marginRight}
      $borderStyle={$borderStyle}
      $borderWidth={$borderWidth}
      $paddingLeft={$paddingLeft}
      $paddingRight={$paddingRight}
      $borderRadius={$borderRadius}
      $fontSizeName={$fontSizeName}
      $marginBottom={$marginBottom}
      $paddingBottom={$paddingBottom}
      $isInUpperCase={$isInUpperCase}
      $fontWeightName={$fontWeightName}
      $hoverColorName={$hoverColorName}
      $borderColorName={$borderColorName}
      $backgroundColorName={$backgroundColorName}
      $hoverChildrenImageFilter={$hoverChildrenImageFilter}
      $hoverBackgroundColorName={$hoverBackgroundColorName}
      $hoverChildBorderColorName={$hoverChildBorderColorName}
      $hoverChildrenSvgColorName={$hoverChildrenSvgColorName}
      $disabledBackgroundColorName={$disabledBackgroundColorName}
      $disabledChildBorderColorName={$disabledChildBorderColorName}
      onClick={handleClick}
      onMouseDown={handleMouseDown}>
      <BoxStyled $isVisible={!$isLoading}>{children}</BoxStyled>

      {$isLoading && (
        <ActionLoading $colorName={$colorName} speed="fast"></ActionLoading>
      )}
    </ButtonStyled>
  );
}

export default Button;

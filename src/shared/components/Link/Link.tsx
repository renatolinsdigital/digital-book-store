import LinkProps from './Link.model';
import { ReactActionEvent } from '@/shared/models';
import AnchorStyled from '../AnchorStyled/AnchorStyled';

function Link({
  id,
  $flex,
  $label,
  $cursor,
  onClick,

  children,
  $position,
  $wordWrap,
  $colorName,
  $alignItems,

  $marginTop,
  $marginLeft,
  $marginRight,
  $marginBottom,

  $paddingTop,
  $paddingLeft,
  $paddingRight,
  $paddingBottom,

  $isFlexible,
  $hasUnderline,
  $fontSizeName,
  $isInUpperCase,
  $hoverColorName,
  $lineHeightName,
  $fontWeightName,
  $justifyContent,
  $fontFamilyName,

  $location = './',
  $textUnderlineOffset,
  $isOpeningInNewTab = true
}: LinkProps) {
  const handleClick = (event: ReactActionEvent & Event) => {
    if (!onClick) return;
    event.stopPropagation();
    event.preventDefault();
    onClick();
  };
  return (
    <AnchorStyled
      id={id}
      $flex={$flex}
      href={$location}
      $cursor={$cursor}
      onClick={handleClick}
      $position={$position}
      $wordWrap={$wordWrap}
      $colorName={$colorName}
      $isFlexible={$isFlexible}
      $alignItems={$alignItems}
      $marginTop={$marginTop}
      $marginLeft={$marginLeft}
      $marginRight={$marginRight}
      $marginBottom={$marginBottom}
      $paddingTop={$paddingTop}
      $paddingLeft={$paddingLeft}
      $paddingRight={$paddingRight}
      $paddingBottom={$paddingBottom}
      $hasUnderline={$hasUnderline}
      $fontSizeName={$fontSizeName}
      $isInUpperCase={$isInUpperCase}
      $fontFamilyName={$fontFamilyName}
      $justifyContent={$justifyContent}
      $lineHeightName={$lineHeightName}
      $hoverColorName={$hoverColorName}
      $fontWeightName={$fontWeightName}
      $textUnderlineOffset={$textUnderlineOffset}
      target={$isOpeningInNewTab ? '_blank' : '_self'}>
      <>
        {$label}
        {children}
      </>
    </AnchorStyled>
  );
}

export default Link;

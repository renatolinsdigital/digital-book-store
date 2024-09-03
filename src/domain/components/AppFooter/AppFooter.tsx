import { BoxStyled, TextStyled, Link } from '@/shared/components';
import { useResponsiveBooleans } from '@/shared/hooks';

function AppFooter() {
  const { youJokingRight } = useResponsiveBooleans();
  return (
    <BoxStyled
      $paddingTop="1rem"
      $paddingLeft="1rem"
      $paddingRight="1rem"
      $paddingBottom="1rem"
      $backgroundColorName="secondary"
      $flexDirection={youJokingRight ? 'column' : 'row'}>
      <TextStyled
        $colorName="white"
        $lineHeightName="tall"
        $paddingRight="0.25rem"
        $hoverColorName="white"
        $fontSizeName="superSmall">
        Developed by
      </TextStyled>
      <Link
        $colorName="white"
        $lineHeightName="tall"
        $fontWeightName="bold"
        $hoverColorName="gray2"
        $fontSizeName="superSmall"
        $location="https://www.linkedin.com/in/renatolinsdigital">
        Renato Lins
      </Link>
    </BoxStyled>
  );
}

export default AppFooter;

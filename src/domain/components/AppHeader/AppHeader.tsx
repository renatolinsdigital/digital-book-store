import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useResponsiveBooleans } from '@/shared/hooks';
import { selectTotalItemsInCart } from '@/features/cart/cartSelectors';
import {
  Link,
  Image,
  Button,
  BoxStyled,
  TextStyled
} from '@/shared/components';

function AppHeader() {
  const navigate = useNavigate();
  const { isSmall, youJokingRight } = useResponsiveBooleans();

  const totalItems = useSelector((state: RootState) =>
    selectTotalItemsInCart(state)
  );

  const onGoToHome = () => {
    navigate('/');
  };

  const onGoToCart = () => {
    navigate('/cart');
  };

  return (
    <BoxStyled
      $minHeight={88}
      $minWidth="100%"
      $backgroundColorName="secondary">
      <BoxStyled
        $maxWidth={1080}
        $marginLeft="auto"
        $paddingLeft="1rem"
        $marginRight="auto"
        $paddingRight="1rem"
        $justifyContent="space-between">
        <Link
          $colorName="white"
          onClick={onGoToHome}
          $fontWeightName="bold"
          $hoverColorName="gray3"
          $isOpeningInNewTab={false}
          $fontSizeName={youJokingRight ? 'small' : 'extraLarge'}>
          DigitalBookStore
        </Link>
        <BoxStyled
          $marginLeft="auto"
          $marginRight="1rem"
          $alignItems="flex-end"
          $flexDirection="column">
          <TextStyled
            $colorName="white"
            $isVisible={!isSmall}
            $fontSizeName="small"
            $paddingBottom="0.25rem"
            $fontWeightName="semiBold">
            My Cart
          </TextStyled>
          <TextStyled
            $colorName="gray5"
            $fontSizeName="superSmall"
            $fontWeightName="semiBold"
            $isVisible={!youJokingRight}
            $paddingTop={isSmall ? '0.5rem' : '0.25rem'}>
            {totalItems} {totalItems === 1 ? 'item' : 'items'}
          </TextStyled>
        </BoxStyled>
        <Button
          onClick={onGoToCart}
          $backgroundColorName="transparent"
          $hoverBackgroundColorName="transparent"
          $hoverChildrenImageFilter="brightness(70%)">
          <Image
            isDomainImage
            $maxWidth={24}
            $maxHeight={24}
            fileName="basket"
            fileExtension="svg"
            $isShimmerCircular={true}
            alternativeText="Cart Icon"
          />
        </Button>
      </BoxStyled>
    </BoxStyled>
  );
}

export default AppHeader;

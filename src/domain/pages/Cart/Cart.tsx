import { formatToBRL } from '@/shared/helpers';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '@/store';
import { emptyCart } from '@/features/cart/cartSlice';
import { useResponsiveBooleans } from '@/shared/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotal } from '@/features/cart/cartSelectors';
import { CartItemCard, PageContainer } from '@/domain/components';
import { proceedToDownload } from '@/features/download/downloadSlice';
import { BoxStyled, Button, Image, TextStyled } from '@/shared/components';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const cartTotal = useSelector(selectCartTotal);
  const { isSuperSmall, youJokingRight, isSmall, isSmaller } =
    useResponsiveBooleans();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const onGoToHome = () => {
    navigate('/');
  };

  const onPurchase = () => {
    dispatch(proceedToDownload(cartItems));
    dispatch(emptyCart());
    navigate('/success');
  };

  return (
    <PageContainer>
      {cartItems.length === 0 ? (
        <BoxStyled
          $paddingTop="4rem"
          $paddingLeft="1rem"
          $paddingRight="1rem"
          $paddingBottom="2rem"
          $borderRadius="0.25rem"
          $flexDirection="column"
          $justifyContent="flex-start"
          $backgroundColorName="white">
          <TextStyled
            $textAlign="center"
            $paddingBottom="1rem"
            $fontWeightName="bold"
            $maxWidth={isSmaller ? 300 : 'auto'}
            $lineHeightName={youJokingRight ? 'tall' : 'taller'}
            $fontSizeName={youJokingRight ? 'default' : 'extraLarge'}>
            You don't have any items in your cart yet. Go shopping!
          </TextStyled>
          <BoxStyled
            $isStretched={false}
            $marginBottom="1.75rem"
            $borderBottom="1.36px solid"
            $borderColorName="secondary"
            $minWidth={isSmall ? 180 : 450}>
            <Image
              isDomainImage
              $maxHeight={460}
              fileExtension="png"
              fileName="characters_buying"
              alternativeText="The Cart is Empty"
              $maxWidth={youJokingRight ? '80px' : 'auto'}
            />
          </BoxStyled>
          <Button
            $width={175}
            $isInUpperCase
            $minHeight={40}
            $maxWidth="100%"
            $paddingTop="0.5rem"
            onClick={onGoToHome}
            $paddingLeft="0.5rem"
            $paddingRight="0.5rem"
            $paddingBottom="0.5rem"
            $fontWeightName="bold"
            $fontSizeName="superSmall">
            Browse the store
          </Button>
        </BoxStyled>
      ) : (
        <BoxStyled
          $minWidth="100%"
          $paddingTop="1rem"
          $paddingLeft="1rem"
          $isStretched={false}
          $paddingRight="1rem"
          $paddingBottom="1rem"
          $borderRadius="0.25rem"
          $flexDirection="column"
          $justifyContent="flex-start"
          $backgroundColorName="white">
          {cartItems.map((cartItem, index) => {
            return (
              <CartItemCard
                itemId={cartItem.id}
                hasHeader={index === 0}
                itemName={cartItem.title}
                itemPrice={cartItem.price}
                quantity={cartItem.quantity}
                externalImageUrl={cartItem.image}
                key={`item#${cartItem.id}-${index}`}
              />
            );
          })}
          <BoxStyled
            $marginTop="1rem"
            $marginBottom="1rem"
            $flexDirection={
              isSuperSmall || youJokingRight ? 'column-reverse' : 'row'
            }>
            <Button
              $isInUpperCase
              $minHeight={40}
              $paddingTop="0.5rem"
              $paddingLeft="0.5rem"
              $paddingRight="0.5rem"
              $paddingBottom="0.5rem"
              $fontWeightName="bold"
              onClick={onPurchase}
              $fontSizeName="superSmall"
              $backgroundColorName="success"
              $hoverBackgroundColorName="successDark"
              $minWidth={youJokingRight ? '' : '175px'}
              $marginTop={isSuperSmall || youJokingRight ? '1rem' : 0}
              $width={isSuperSmall || youJokingRight ? '100%' : 'auto'}>
              Place order
            </Button>
            <BoxStyled
              $justifyContent={
                isSuperSmall || youJokingRight ? 'space-between' : 'flex-end'
              }
              $flexDirection={youJokingRight ? 'column' : 'row'}>
              <TextStyled
                $isInUpperCase
                $colorName="gray5"
                $fontWeightName="bold"
                $paddingBottom={youJokingRight ? '0.5rem' : 0}
                $marginRight={youJokingRight ? '0.25rem' : '1.25rem'}
                $fontSizeName={youJokingRight ? 'smallest' : 'small'}>
                Total
              </TextStyled>
              <TextStyled
                $fontWeightName="bold"
                $fontSizeName={youJokingRight ? 'superSmall' : 'huge'}>
                {formatToBRL(cartTotal)}
              </TextStyled>
            </BoxStyled>
          </BoxStyled>
        </BoxStyled>
      )}
    </PageContainer>
  );
};

export default Cart;

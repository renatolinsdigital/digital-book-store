import {
  Image,
  Button,
  TextInput,
  BoxStyled,
  TextStyled,
  TitleStyled,
  GridContainerStyled
} from '@/shared/components';
import {
  addToCart,
  setItemQuantity,
  subtractFromCart,
  removeItemFromCart
} from '@/features/cart/cartSlice';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { formatToBRL } from '@/shared/helpers';
import { ReactInputEvent } from '@/shared/models';
import CartItemCardProps from './CartItemCard.model';
import { useResponsiveBooleans } from '@/shared/hooks';

function CartItemCard({
  itemId,
  itemName,
  itemPrice,
  quantity = 0,
  imageFileName,
  externalImageUrl,
  hasHeader = false
}: CartItemCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [formQuantity, setFormQuantity] = useState(String(quantity));
  const { isSmaller, isSuperSmall, youJokingRight } = useResponsiveBooleans();

  const onInputChange = (event: ReactInputEvent) => {
    const { value } = event.target;
    setFormQuantity(value);
  };

  const onQuantityLeave = () => {
    dispatch(setItemQuantity({ id: itemId, quantity: Number(formQuantity) }));
  };

  const onItemSubtract = () => {
    if (quantity <= 0) return;
    dispatch(subtractFromCart(itemId));
  };

  const onItemAdd = () => {
    if (quantity >= 999) return;
    dispatch(addToCart(itemId));
  };

  const onItemRemove = () => {
    dispatch(removeItemFromCart(itemId));
  };

  useEffect(() => {
    setFormQuantity(String(quantity));
  }, [quantity]);

  return (
    <BoxStyled
      $minWidth="100%"
      $isStretched={false}
      $alignItems="flex-start"
      $borderColorName="gray3"
      $paddingBottom={youJokingRight ? 0 : '1rem'}
      $marginBottom={youJokingRight ? '0' : '1rem'}
      $borderBottom={youJokingRight ? undefined : '1px solid'}>
      <GridContainerStyled $maxWidth="max-content" $paddingTop="0.5rem">
        <TitleStyled
          $isInUpperCase
          $colorName="gray5"
          $fontSizeName="small"
          $paddingTop="0.05rem"
          $paddingBottom="1rem"
          $fontWeightName="bold"
          $isVisible={hasHeader && !isSmaller && !youJokingRight}>
          Product
        </TitleStyled>
        <Image
          isDomainImage
          fileExtension="png"
          $borderStyle="solid"
          $borderWidth="0.10rem"
          $borderRadius="0.15rem"
          $borderColorName="secondary"
          fileName={imageFileName}
          $maxHeight={isSmaller ? 65 : 90}
          alternativeText="Cart Item Image"
          externalImageUrl={externalImageUrl}
          $maxWidth={youJokingRight ? 30 : 'auto'}></Image>
      </GridContainerStyled>

      <GridContainerStyled
        $minHeight="100%"
        $paddingTop="0.5rem"
        $paddingLeft={youJokingRight ? 0 : '1rem'}
        $gridTemplateRows={isSmaller ? '1fr 1fr' : '1fr'}
        $gridTemplateColumns={isSmaller ? '1fr 1fr' : '1fr 1.9fr 1.9fr .2fr'}>
        <BoxStyled
          $paddingRight="1.25rem"
          $alignItems="flex-start"
          $isVisible={!youJokingRight}
          $flexDirection={isSmaller ? 'row' : 'column'}
          $paddingTop={isSmaller || !hasHeader ? 0 : '1.75rem'}
          $justifyContent={isSmaller ? 'flex-start' : 'center'}>
          <TextStyled
            $fontSizeName="small"
            $fontWeightName="bold"
            $paddingBottom="0.25rem">
            {itemName}
          </TextStyled>
          <TextStyled $isVisible={!isSmaller} $fontWeightName="bold">
            {formatToBRL(itemPrice)}
          </TextStyled>
        </BoxStyled>
        <BoxStyled
          $flexDirection="column"
          $alignItems="flex-start"
          $isVisible={!youJokingRight}
          $justifyContent="flex-start"
          $gridRow={isSmaller ? '2 / 3' : '1 / 2'}
          $gridColumn={isSmaller ? '1 / 2' : '2 / 3'}>
          <TitleStyled
            $isInUpperCase
            $colorName="gray5"
            $isStretched={false}
            $fontSizeName="small"
            $paddingTop="0.05rem"
            $paddingBottom="1rem"
            $fontWeightName="bold"
            $isVisible={hasHeader && !isSmaller && !youJokingRight}>
            Quantity
          </TitleStyled>
          <BoxStyled $justifyContent="flex-start" $paddingBottom="0.25rem">
            <Button
              onClick={onItemSubtract}
              $isEnabled={quantity >= 0}
              $isVisible={!youJokingRight}
              $backgroundColorName="transparent"
              $hoverBackgroundColorName="transparent"
              $disabledBackgroundColorName="transparent"
              $hoverChildrenImageFilter="brightness(70%)">
              <Image
                isDomainImage
                $maxWidth={18}
                $maxHeight={18}
                fileName="minus"
                fileExtension="svg"
                alternativeText="Minus Icon"
              />
            </Button>
            <TextInput
              $maxLength={3}
              $maxWidth={60}
              $minHeight={26}
              $borderWidth={1}
              $textAlign="center"
              $borderStyle="solid"
              $marginLeft="0.5rem"
              $fontSizeName="small"
              $marginRight="0.5rem"
              $value={formQuantity}
              onChange={onInputChange}
              $borderRadius="0.25rem"
              onBlur={onQuantityLeave}
              restriction="onlyNumbers"
              $textColorName="secondary"
              $onFocusBorderColorName="primary"
              $borderColorName="gray3"></TextInput>
            <Button
              onClick={onItemAdd}
              $isVisible={!youJokingRight}
              $isEnabled={quantity < 999}
              $backgroundColorName="transparent"
              $hoverBackgroundColorName="transparent"
              $disabledBackgroundColorName="transparent"
              $hoverChildrenImageFilter="brightness(70%)">
              <Image
                isDomainImage
                $maxWidth={18}
                $maxHeight={18}
                fileName="plus"
                fileExtension="svg"
                alternativeText="Plus Icon"
              />
            </Button>
          </BoxStyled>
        </BoxStyled>
        <BoxStyled
          $flexDirection="column"
          $isVisible={!youJokingRight}
          $justifyContent="flex-start"
          $gridRow={isSmaller ? '2 / 3' : '1 / 2'}
          $gridColumn={isSmaller ? '2 / 3' : '3 / 4'}
          $alignItems={isSmaller ? 'flex-end' : 'flex-start'}>
          <TitleStyled
            $isInUpperCase
            $colorName="gray5"
            $isStretched={false}
            $fontSizeName="small"
            $paddingTop="0.05rem"
            $paddingBottom="1rem"
            $fontWeightName="bold"
            $isVisible={hasHeader && !isSmaller && !youJokingRight}>
            subtotal
          </TitleStyled>
          <TextStyled
            $isInUpperCase
            $colorName="gray5"
            $fontWeightName="bold"
            $isVisible={isSmaller}
            $paddingBottom="0.5rem"
            $fontSizeName="superSmall">
            Subtotal
          </TextStyled>
          <TextStyled
            $flex={1}
            $top="-0.25rem"
            $isFlexible={true}
            $position="relative"
            $fontWeightName="bold"
            $fontSizeName={itemPrice * quantity < 1000 ? 'default' : 'small'}>
            {formatToBRL(itemPrice * quantity)}
          </TextStyled>
        </BoxStyled>
        <BoxStyled
          $justifyContent="flex-end"
          $alignItems={isSmaller ? 'flex-start' : 'center'}
          $flexDirection={youJokingRight ? 'column' : 'row'}>
          <TextStyled
            $fontWeightName="bold"
            $isVisible={isSmaller && !youJokingRight}
            $paddingRight={isSuperSmall ? '0.35rem' : '1rem'}>
            {formatToBRL(itemPrice)}
          </TextStyled>

          <Button
            onClick={onItemRemove}
            $isVisible={!youJokingRight}
            $backgroundColorName="transparent"
            $hoverBackgroundColorName="transparent"
            $paddingTop={!isSmaller ? '1.6rem' : 0}
            $marginRight={isSmaller ? 0 : '0.25rem'}
            $hoverChildrenImageFilter="brightness(70%)">
            <Image
              isDomainImage
              $maxWidth={18}
              $maxHeight={18}
              fileName="trash"
              fileExtension="svg"
              $isShimmerCircular={true}
              alternativeText="Trash Icon"
            />
          </Button>
          <TextStyled
            $paddingTop={2}
            $paddingLeft={4}
            $lineHeightName="tall"
            $fontWeightName="bold"
            $fontSizeName="smallest"
            $isVisible={youJokingRight}>
            {`(x${quantity}) `}
            {formatToBRL(itemPrice * quantity)}
            <Button
              $colorName="danger"
              $paddingTop="0.2rem"
              onClick={onItemRemove}
              $paddingBottom="0.2rem"
              $fontWeightName="bold"
              $paddingRight="0.25rem"
              $fontSizeName="smallest"
              $isVisible={youJokingRight}
              $hoverColorName="dangerDark"
              $backgroundColorName="transparent"
              $hoverBackgroundColorName="transparent">
              Remove
            </Button>
          </TextStyled>
        </BoxStyled>
      </GridContainerStyled>
    </BoxStyled>
  );
}

export default CartItemCard;

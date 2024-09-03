import { useState } from 'react';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { formatToBRL } from '@/shared/helpers';
import ProductCardProps from './ProductCard.model';
import { useResponsiveBooleans } from '@/shared/hooks';
import { selectItemQuantityById } from '@/features/cart/cartSelectors';
import { BoxStyled, Button, Image, TextStyled } from '@/shared/components';

function ProductCard({
  title,
  price,
  productId,
  onAddToCart,
  imageFileName,
  externalImageUrl
}: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { youJokingRight } = useResponsiveBooleans();

  const quantityInCart = useSelector((state: RootState) =>
    selectItemQuantityById(state, productId)
  );

  const handleAddToCart = async () => {
    if (quantityInCart >= 999) return;
    setIsLoading(true);
    await onAddToCart(productId);
    setIsLoading(false);
  };
  return (
    <BoxStyled
      id={productId}
      $isStretched={false}
      $paddingTop="1.25rem"
      $paddingLeft="1.25rem"
      $alignSelf="flex-start"
      $borderRadius="0.25rem"
      $paddingRight="1.25rem"
      $paddingBottom="1.25rem"
      $flexDirection="column"
      $backgroundColorName="tertiary">
      <Image
        isDomainImage
        $maxHeight={400}
        fileExtension="png"
        $borderStyle="solid"
        $borderWidth="0.20rem"
        $borderRadius="0.25rem"
        fileName={imageFileName}
        $borderColorName="secondary"
        alternativeText="Product Image"
        externalImageUrl={externalImageUrl}></Image>
      <TextStyled
        $paddingTop="1rem"
        $fontWeightName="bold"
        $paddingBottom="0.75rem"
        $fontSizeName="superSmall">
        {title}
      </TextStyled>
      <TextStyled
        $fontWeightName="bold"
        $paddingBottom="0.75rem"
        $fontSizeName={youJokingRight ? 'superSmall' : 'default'}>
        {formatToBRL(price)}
      </TextStyled>
      <Button
        $width="100%"
        $isInUpperCase
        $maxWidth={380}
        $minHeight={40}
        $colorName="white"
        $paddingTop="0.5rem"
        $isLoading={isLoading}
        $paddingLeft="0.75rem"
        $fontWeightName="bold"
        $paddingBottom="0.5rem"
        $paddingRight="0.75rem"
        onClick={handleAddToCart}
        $isEnabled={quantityInCart < 999}
        $fontSizeName={youJokingRight ? 'smallest' : 'superSmall'}
        $backgroundColorName={quantityInCart > 0 ? 'primary' : 'secondary'}
        $hoverBackgroundColorName={
          quantityInCart > 0 ? 'primaryDark' : 'secondaryDark'
        }>
        <Image
          $top={1}
          isDomainImage
          fileName="cart-add"
          fileExtension="svg"
          $isVisible={!youJokingRight}
          alternativeText="Add to cart"></Image>
        <TextStyled
          $colorName="white"
          $paddingLeft="0.25rem"
          $paddingRight="0.75rem"
          $fontSizeName="superSmall"
          $isVisible={!youJokingRight}>
          {quantityInCart}
        </TextStyled>
        {youJokingRight ? (
          <Image
            isDomainImage
            $maxWidth={18}
            $maxHeight={18}
            fileExtension="svg"
            fileName="plus-white"
            $isShimmerCircular={true}
            alternativeText="Plus Icon"
          />
        ) : (
          'Add to Cart'
        )}
      </Button>
    </BoxStyled>
  );
}

export default ProductCard;

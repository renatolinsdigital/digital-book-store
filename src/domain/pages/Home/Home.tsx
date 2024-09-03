import { useEffect } from 'react';
import { AppDispatch, RootState } from '@/store';
import { addToCart } from '@/features/cart/cartSlice';
import { useResponsiveBooleans } from '@/shared/hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
  BoxStyled,
  GridContainerStyled,
  TextStyled
} from '@/shared/components';
import { fetchProducts } from '@/features/cart/cartThunk';
import { ProductCard, PageContainer } from '@/domain/components';

const Home = () => {
  const { isSmall, isSmaller } = useResponsiveBooleans();

  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.cart.status);
  const products = useSelector((state: RootState) => state.cart.products);

  const onAddToCart = async (itemId: string) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 200)); // Simulating a back-end update as well
      dispatch(addToCart(itemId));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <PageContainer isContentLoading={status === 'loading'}>
      <GridContainerStyled
        $gap="1rem"
        $minHeight={688}
        $gridTemplateColumns={
          isSmaller ? '1fr ' : isSmall ? '1fr 1fr' : '1fr 1fr 1fr'
        }>
        {products ? (
          products.map((product, index) => {
            return (
              <ProductCard
                price={product.price}
                title={product.title}
                productId={product.id}
                onAddToCart={onAddToCart}
                key={`item#${product.id}-${index}`}
                externalImageUrl={product.image}></ProductCard>
            );
          })
        ) : (
          <BoxStyled $alignItems="flex-start">
            <TextStyled
              $colorName="white"
              $lineHeightName="tall"
              $fontSizeName="smallest">
              Product list is unavailable. Try again later
            </TextStyled>
          </BoxStyled>
        )}
      </GridContainerStyled>
    </PageContainer>
  );
};

export default Home;

interface ProductCardProps {
  title: string;
  price: number;
  productId: string;
  imageFileName?: string;
  externalImageUrl?: string;
  onAddToCart: (productId: string) => void;
}

export default ProductCardProps;

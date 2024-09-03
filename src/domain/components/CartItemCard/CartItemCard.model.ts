interface CartItemCardProps {
  itemId: string;
  itemName: string;
  quantity: number;
  itemPrice: number;
  hasHeader?: boolean;
  imageFileName?: string;
  externalImageUrl?: string;
}

export default CartItemCardProps;

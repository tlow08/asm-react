export type InProduct = {
    _id: string| number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
}
export type CartItem = {
    product: InProduct;
    quantity: number;
  }
  
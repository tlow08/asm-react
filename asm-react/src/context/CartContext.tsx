import  { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCart } from '../services/cart'; // Adjust the import based on your file structure
import { CartItem } from '../interface/Product';


interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  totalQuantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children } :{children : ReactNode}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCart();
        setCartItems(response.data.data.products);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };

    fetchCart();
  }, []);

  useEffect(()=>{
  const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(quantity);
  },[cartItems]);
  
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if(!context){
    throw new Error("error");
  }
  return context;
};

import  { createContext, useContext, useState, useEffect } from 'react';
import { getCart } from '../services/cart'; // Adjust the import based on your file structure

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

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

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

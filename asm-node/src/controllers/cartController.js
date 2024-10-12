import Cart from "../models/CartModel.js";
import Product from "../models/ProductModel.js";

export const addToCart = async (req, res, next) => {
  const { productId, quantity } = req.body; 

  if (!productId || !quantity) {
    return res.status(400).json({ message: "Product ID and quantity are required" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = await Cart.create({ user: req.user.id, products: [] });
    }

    const existingProductIndex = cart.products.findIndex(item => item.product.toString() === productId);
    
    if (existingProductIndex > -1) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();

    return res.status(201).json({
      success: true,
      data: cart,
      message: "Product added to cart successfully",
    });
  } catch (error) {
    console.error("Error in addToCart:", error);
    return res.status(500).json({ message: "Failed to add product to cart" });
  }
};

export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate('products.product');
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json({ data: cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Update Product Quantity in Cart
export const updateCartProduct = async (req, res) => {
    const { productId, quantity } = req.body; // Get product ID and quantity from the request body
    if (!productId || !quantity) {
        return res.status(400).json({ message: "Product ID and quantity are required" });
    }
    
    try {
        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        
        // Check if the product exists in the cart
        const productIndex = cart.products.findIndex((item) => item.product.toString() === productId);
        if (productIndex === -1) {
            return res.status(404).json({ message: "Product not found in cart" });
        }
        
        // Update quantity
        cart.products[productIndex].quantity = quantity;
        await cart.save();
        
        res.status(200).json({ message: "Quantity updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Remove Product from Cart
export const removeFromCart = async (req, res) => {
    const { productId } = req.body; // Get product ID from request body
    if (!productId) {
        return res.status(400).json({ message: "Product ID is required" });
    }
    
    try {
        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        
        // Filter out the product to remove
        cart.products = cart.products.filter((item) => item.product.toString() !== productId);
        await cart.save();
        
        res.status(200).json({ message: "Product removed from cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
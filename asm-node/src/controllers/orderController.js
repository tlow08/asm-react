import Order from "../models/OrderModel.js"
export const orderCreate = async(req, res, next) => {
  const { userName, address, email, phoneNumber, totalPrice, products, isPayment } = req.body;
  try {
    const newOrder = new Order({
      user: req.user._id,
      userName,
      address,
      email,
      phoneNumber,
      totalPrice,
      products, 
      isPayment
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to place order', error: error.message });
  }
}

export const getOrderById = async (req, res, next) =>{
  const {orderId} = req.params;
  try{
    const order = await Order.findById(orderId).populate('user', 'userName email');
    if(!order){
      return res.status(404).json({message: "order not found"});
    }
    res.status(200).json(order);

  }catch(error){
    res.status(500).json({message: "Failed to retrieve order", error: error.message})
  }
}

export const getUserOrders = async (req, res, next) => {
  try{
    const orders = await Order.find({user: req.user._id})
    .populate({
      path: 'products.productId',
      select: 'title price'
    })
    .sort({createAt: -1});
    if(!orders || orders.length === 0){
      return res.status(404).json({message: "no orders found"});
    }
    res.status(200).json(orders);
  }catch(error){
    res.status(500).json({message: "failed", error: error.message});
  }
}


import product from "../../frontend/src/pages/product.jsx";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel";
import Stripe from "stripe";
// global variables
const currency = 'inr'
const deliveryCharge = 10

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY)

// Placing orders using COD Method
const placeOrder = async (req,res) => {

    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            data: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed"})


    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
        
    }

}

// Placing orders using Stripe Method
const placeOrderStripe = async (req,res) => {
    try {

        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            data: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const line_items = items.map(() => ({
        price_data: {
            currency:currency,
            product_data: {
                name:items.name
            },
            umit_amount: items.price * 100
        },
        quantity: items.quantity
    }))

    line_items.push({
        price_data: {
            currency:currency,
            product_data: {
                name:'Delivery Charges'
            },
            umit_amount: deliveryCharge * 100
        },
        quantity: 1
    })

    const session = await stripe.checkout.sessions.create({
        success_url: `${origin}/verify?succes=true&orderId=${newOrder._id}`,
        cancel_url: `${origin}/verify?succes=false&orderId=${newOrder._id}`,
        line_items,
        mode: 'payment',
    })

    res.json({success:true,session_url:session.url});
    


        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
    
}

// Placing orders using Razorpay Method
const placeOrderRazorpay = async (req,res) => {
    
}

// All Orders data for admin panel
const allOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
    
}

// User Order Data for Frontend
const userOrders = async (req,res) => {

    try {

        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({success:true,orders})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// update order status from Admin panel
const updateStatus = async (req,res) => {
    try {

        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({success:true,message:'Status Updated'})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}

export {placeOrder, placeOrderRazorpay, allOrders, userOrders, updateStatus}
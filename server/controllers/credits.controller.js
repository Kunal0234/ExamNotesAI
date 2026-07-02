import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";
import UserModel from "../models/user.model.js";

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const CREDIT_MAP = {
  100: 50,
  200: 120,
  500: 300,
};

export const createCreditsOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!CREDIT_MAP[amount]) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credit Plan",
      });
    }

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        userId: req.userId,
        credits: CREDIT_MAP[amount].toString(),
      },
    };

    const order = await razorpay.orders.create(options);

    return res.status(200).json({
      success: true,
      order,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Unable to create order",
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment Verification Failed",
      });
    }

    const order = await razorpay.orders.fetch(razorpay_order_id);

    const credits = Number(order.notes.credits);
    const userId = order.notes.userId;

    const user = await UserModel.findByIdAndUpdate(
      userId,
      {
        $inc: {
          credits: credits,
        },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      credits: user.credits,
      message: "Payment Successful",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Payment Verification Failed",
    });
  }
};
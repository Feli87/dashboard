import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    phone: {
        type: String,
        max: 10
    },
    comments: {
        type: String,
    },
    address: {
        type: String,
        max: 50
    }
},{
    timestamps: true
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        min: 0,
        required: true,
    },
    category: {
        type: String,
        default: "non category"
    },
    stock: {
        type: Number,
        min: 0,
        default: 0
    },
    size: {
        type: String,
        max: 10
    }
},{
    timestamps: true
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);



import { User, Product } from "./models";
import { connectDb } from "./utils";

export const fetchUsers = async (query, page) => {

    const regex = new RegExp(query, 'i');

    const ITEM_PEER_PAGE = 4;
    try {
        connectDb();
        const count = await User.find({
            $or: [
                { username: { $regex: regex } },
                { email: { $regex: regex } },
                { phone: { $regex: regex } },
                { address: { $regex: regex } },
            ]
        }).count();
        const users = await User.find({
            $or: [
                { username: { $regex: regex } },
                { email: { $regex: regex } },
                { phone: { $regex: regex } },
                { address: { $regex: regex } },
            ]
        }).limit(ITEM_PEER_PAGE).skip(ITEM_PEER_PAGE * (page - 1));
        return {users, count};
    } catch (error) {
        console.log("🚀 ~ fetchUsers ~ error:", error)
        throw new Error(error);
    }
}
export const fetchProducts = async (query, page) => {

    const regex = new RegExp(query, 'i');

    const ITEM_PEER_PAGE = 4;
    try {
        connectDb();
        
        const count = await Product.find({
            $or: [
                { name: { $regex: regex } },
                { description: { $regex: regex } },
                { category: { $regex: regex } },
            ]
        }).count();

        const products = await Product.find({
            $or: [
                { name: { $regex: regex } },
                { description: { $regex: regex } },
                { category: { $regex: regex } },
            ]
        }).limit(ITEM_PEER_PAGE).skip(ITEM_PEER_PAGE * (page - 1));

        return {products, count};

    } catch (error) {
        throw new Error(error);
    }
}

export const fetchUserById = async (userId) => {
    try {
        connectDb();
        const user = await User.findOne({ _id: userId });
        return user;
    } catch (error) {
        console.log("🚀 ~ fetchUserById ~ error:", error);
        throw new Error(error);
    }
}

export const editUser = async (userId, newData) => {
    try {
        connectDb();
        const user = await User.findByIdAndUpdate(userId, newData, { new: true });
        return user;
    } catch (error) {
        console.log("🚀 ~ editUser ~ error:", error);
        throw new Error(error);
    }
}

export const deleteUser = async (userId) => {
    try {
        connectDb();
        const user = await User.findByIdAndDelete(userId);
        return user;
    } catch (error) {
        console.log("🚀 ~ deleteUser ~ error:", error);
        throw new Error(error);
    }
}

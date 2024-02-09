import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
export const adduser = async (formData) => {
    "use server"
    let {
        username,
        password,
        email,
        phone,
        address,
        country,
        role,
        comments
    } = Object.fromEntries(formData);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
        connectDb();
        const newUser = new User({
            username,
            password:hashedPassword,
            email,
            phone,
            address,
            country,
            role,
            comments
        })
        await newUser.save();
    } catch (error) {
        console.log("🚀 ~ adduser ~ error:", error)
        throw new Error(error);
    }

    revalidatePath('/dashboard/users');
    redirect('/dashboard/users')
}

export const addProduct = async (formData) => {
    'use server'
    let {
        name,
        description,
        color,
        size,
        category,
        price,
        stock,
        image
    } = Object.fromEntries(formData);

    try {
        connectDb();
        const newProduct = new Product({
            name,
            description,
            color,
            size,
            category,
            price,
            stock,
            image
        })
        await newProduct.save();
    } catch (error) {
        console.log("🚀 ~ adduser ~ error:", error)
        throw new Error(error);
    }

    revalidatePath('/dashboard/products');
    redirect('/dashboard/products')
}
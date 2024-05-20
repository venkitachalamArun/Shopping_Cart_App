
import {Request, Response} from 'express';
import { Cart } from '../models/cartData';
import { AppDataSource } from '../config/data';


export const showCarts = async (req: Request, res: Response) => {
    try {
        const carts = await AppDataSource.manager.find(Cart, { relations: ["product"] });
        res.status(200).json({
            status: 'success',
            data: {
                carts
            }
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}

export const createCart = async (req: Request, res: Response) => {
    const { productId, quantity, price } = req.body;
    try{
        const addCart = await AppDataSource.manager.create(Cart, {productId, quantity, price})
        await AppDataSource.manager.save(addCart);

        console.log(addCart);
        
        res.status(200).json(addCart);
    }catch(error: any){
        res.status(400).json({error: error.message})
    }
}


export const updateCart = async (req: Request, res: Response) => {
    const productId = req.params.productId;
    try {
        // Find the product by ID to update cart 
        const existingCart = await AppDataSource.manager.update(Cart,{productId: productId}, req.body);        
        res.status(200).json(existingCart);
    } catch (error: any){
        res.status(400).json({ error: error.message });
    }
};
export const deleteCart = async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        // Find the product by ID and delete it
        const deleteCart = await AppDataSource.manager.delete(Cart, {productId: productId});
        
        if (!deleteCart) {
            return res.status(404).json({ error: 'Item not found' });
        }
        
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
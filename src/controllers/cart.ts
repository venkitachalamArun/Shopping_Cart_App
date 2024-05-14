import {Request,Response} from 'express';

const CartDetail= (req:Request,res:Response)=>{
    res.json({
        message:"This is  Cart",
        data:["cart1","cart2","cart3"]
     })
}



export {CartDetail };
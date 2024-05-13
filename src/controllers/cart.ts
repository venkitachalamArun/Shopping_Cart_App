import {Request,Response} from 'express';

const CartDetail= (req:Request,res:Response)=>{
    res.json({
        message:"This is  Cart  ",
        data:["cart1"]
     })
}



export {CartDetail };
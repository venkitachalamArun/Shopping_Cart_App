import {Request,Response} from 'express';

const productDetail= (req:Request,res:Response)=>{
    res.json({
        message:"This is product"
     })
}



export { productDetail };
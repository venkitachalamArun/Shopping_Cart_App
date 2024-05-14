import {Request,Response} from 'express';

const productDetail= (req:Request,res:Response)=>{
    res.json({
        message:"This is product",
        data:["Product1","Product2","Product3"]
     })
}



export { productDetail };
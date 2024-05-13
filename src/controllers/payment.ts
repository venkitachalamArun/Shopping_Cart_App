import {Request,Response} from 'express';


const PaymentDetails= (req:Request,res:Response)=>{
    res.json({
        message:"This is  Payment "
     })
}

export {PaymentDetails };
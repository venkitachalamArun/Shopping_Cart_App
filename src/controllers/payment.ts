import {Request,Response} from 'express';


const PaymentDetails= (req:Request,res:Response)=>{
    res.json({
        message:"This is  Payment ",
        data:["1Rs","2RS","3RS"]

     })
}

export {PaymentDetails };
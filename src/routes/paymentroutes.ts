import express from 'express';
const paymentrouter= express.Router();
import{PaymentDetails} from '../controllers/payment';

paymentrouter.get('/',PaymentDetails);


export {
    paymentrouter
}
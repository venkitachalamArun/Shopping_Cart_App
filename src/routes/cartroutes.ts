import express from 'express';
const cartrouter= express.Router();
import{CartDetail} from '../controllers/cart';
cartrouter.get('/',CartDetail);

export {
    cartrouter
}
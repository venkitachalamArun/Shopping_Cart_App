import express from 'express';
const cartrouter= express.Router();
import{CartDetail} from '../controllers/cart';
cartrouter.get('/carts',CartDetail);

export {
    cartrouter
}
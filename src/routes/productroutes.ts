import express from 'express';
const productrouter= express.Router();
import{productDetail} from '../controllers/products'
productrouter.get('/',productDetail);

export {
    productrouter
}

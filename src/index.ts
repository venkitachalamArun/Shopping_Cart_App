import express,{Application,Request,Response} from 'express';
const app:Application= express();
import { productrouter } from './routes/productroutes';
import { cartrouter } from './routes/cartroutes';
import { paymentrouter } from './routes/paymentroutes';

const PORT:Number=3000;


app.use("/products", productrouter);
app.use("/carts", cartrouter);
app.use("/payment", paymentrouter);

app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`)  
})
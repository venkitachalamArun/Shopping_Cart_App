import express, { Express } from 'express';
// import connectDB from './src/config/db.js';
// import updatePaymentDateMiddleware from './src/middlewares/paymentMiddleware.js'
const app: Express = express();
import { AppDataSource } from './config/data';
import productRoutes from './routes/productroutes';
import cartRoutes from './routes/cartroutes';
app.use(express.json());


// //MongoDb connection
// connectDB();
// // Routes
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
// app.use('/payments', paymentRoutes);
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('Mongo Database connection Sucess');
        // console.log('MongoDB connection properties:', AppDataSource);
    })
    .catch((error) => console.log(error))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server started runnning on the port ${PORT}`);
})
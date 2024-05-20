import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cart } from "../models/cartData"
import { Product } from "../models/productData"

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: "localhost",
    useNewUrlParser: true,
    synchronize: true,
    logging: true,
    entities: [Cart, Product]
})
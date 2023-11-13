import mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config()

const db = process.env.DATABASE

export const database = async () => {
    await mongoose.connect(db!)
}

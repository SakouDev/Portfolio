import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        mail: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: false,
            default: null
        },
    },
    {
        timestamps: true
    }
)

export interface UserType extends mongoose.Document {
    firstName: string;
    lastName: string;
    password: string;
    mail: string;
    token?: string;
}

export const User = mongoose.models.User || mongoose.model('User', userSchema)
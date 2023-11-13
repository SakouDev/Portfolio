import { NextRequest, NextResponse } from "next/server";
import { User } from "../models/user";
import { database } from "../database";

database();

export const POST = async (req: NextRequest) => {
    let res;
    const data = await req.json()

    await User.create(data)
        .then(() => {
            res = { message: 'Created' }
        })
        .catch((err) => {
            res = { message: 'Failed' }
        })

    return NextResponse.json(res)
}

export const GET = async () => {
    let res;

    await User.find({})
        .then((users) => {
            res = { message: "Users found.", data: users }
        })
        .catch((error) => {
            res = { message: "Users not found.", data: error }
        })

    return NextResponse.json(res)
}


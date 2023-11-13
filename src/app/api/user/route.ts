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
    return NextResponse.json({ message: 'GET haha' })
}


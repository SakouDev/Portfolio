import { NextRequest, NextResponse } from "next/server";
import { User } from "../../models/user";

import { database } from "../../database";
database();

export const POST = async (req: NextRequest) => {
    let res;
    const data = await req.json()

    const user = await User.findOne({mail : data.mail})

    if(data.password != user.password){
        console.log('C FO')
    }else{
        console.log('C VRÉ')
    }

    return NextResponse.json(res)
}
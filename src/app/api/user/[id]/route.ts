import { NextResponse } from "next/server"
import { User } from "../../models/user"
import { database } from "../../database";

database()

export const GET = async (req: Request) => {
    let res;
    const id = req.url.split('user/')[1]

    await User.findById({ _id: id })
        .then((user) => {
            res = { message: 'Utilisateur trouvé', data: user }
        })
        .catch((err) => {
            res = { message: `Utilisateur introuvable avec l'id : ${id}`, data: err }
        })

    return NextResponse.json(res)
}

export const PUT = async (req: Request) => {
    let res;
    const id = req.url.split('user/')[1]
    const data = await req.json()

    await User.updateOne({ _id: id }, data)
        .then(() => {
            res = { message: "User Updated" }
        })
        .catch((err) => {
            res = { message: "Update Failed", data: err }
        })

    return NextResponse.json(res)
}

export const DELETE = async (req: Request) => {
    let res;
    const id = req.url.split('user/')[1]

    await User.deleteOne({ _id: id })
        .then(() => {
            res = { message: "User Deleted" }
        })
        .catch((err) => {
            res = { message: "Delete Failed", data: err }
        })

    return NextResponse.json(res)
}
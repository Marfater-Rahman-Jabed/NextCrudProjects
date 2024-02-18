import { connectDb } from "@/helper/db";
import { user } from "@/models/user";
import { NextResponse } from "next/server"

connectDb()
export async function GET(request) {
    let users = [];
    try {
        users = await user.find()
        return NextResponse.json(users);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'failed to get user data',
            status: false
        })

    }
}

export async function POST(request) {
    const { email, password, role } = await request.json()

    const users = new user({
        email, password, role

    })
    // console.log(users)
    try {
        const createdUser = await users.save()
        const response = NextResponse.json(users, { status: 201 })
        return response

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'failed to create user',
            status: false
        })

    }
}
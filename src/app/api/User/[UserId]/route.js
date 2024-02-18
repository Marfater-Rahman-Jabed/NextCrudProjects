import { user } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { UserId } = params;
    try {
        const oneuser = await user.findById({ _id: UserId })
        return NextResponse.json(oneuser, {
            message: 'successfull'
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'failed to show data',
            status: 501
        })

    }
}

export async function DELETE(request, { params }) {
    const { UserId } = params;
    try {
        await user.deleteOne({ _id: UserId })
        return NextResponse.json({
            message: 'User Deleted',
            success: true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'failed to deleted',
            status: false
        })

    }

}
export async function PUT(request, { params }) {
    const { UserId } = params;
    console.log(UserId)
    const filter = { _id: UserId }
    const update = {
        role: 'admin'
    }
    try {
        await user.updateOne(filter, update, {

            upsert: true // Make this update into an upsert
        });
        return NextResponse.json({
            message: 'User Updated',
            success: true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'failed to deleted',
            status: false
        })

    }

}
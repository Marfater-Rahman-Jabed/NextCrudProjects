import { todo } from "@/models/todo"
import { NextResponse } from "next/server"

export async function DELETE(request, { params }) {
    const { TodoId } = params


    try {
        await todo.deleteOne({ _id: TodoId })
        return NextResponse.json({
            message: 'Todo deleted SuccessFully',
            success: true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'Error occure todo fail to delete',
            status: false
        })

    }

}


export async function PUT(request, { params }) {
    const { TodoId } = params;
    const filter = { _id: TodoId }
    const UpdatededData = {
        status: 'Complete'
    }
    try {
        await todo.updateOne(filter, UpdatededData, {
            upsert: true // Make this update into an upsert
        })
        return NextResponse.json({
            message: 'Updated todo',
            success: true
        })


    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'failed to Updated',
            status: false
        })

    }
}
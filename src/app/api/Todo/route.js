import { todo } from "@/models/todo";
import { NextResponse } from "next/server";

export async function GET(request) {
    let alltodos = [];


    try {
        const result = await todo.find()
        return NextResponse.json(result)


    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'error failed to get all todos',
            status: false
        })

    }


}

export async function POST(request) {
    const { title, description, status } = await request.json()
    const todos = new todo({
        title, description, status
    })
    try {
        // console.log(todos)
        const createdTodo = await todos.save()
        return NextResponse.json(todos)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'error failed to create todos',
            status: false
        })

    }
}
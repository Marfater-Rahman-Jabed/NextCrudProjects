'use client'
import { UpdateTodo, deleteTodos } from '@/Services/todoService';
import React from 'react';

const TodosViewCard = ({ todo }) => {
    const handleTodoDelete = async (id) => {
        console.log(id)
        const deleted = await deleteTodos(id)
        console.log(deleted)
    }
    const handleTodoupdate = async (id) => {
        console.log(id)
        const updated = await UpdateTodo(id)
        console.log(updated)
    }
    return (
        <div className='p-4 border-2  border-purple-300'>
            <div className='h-52'>
                <h3 className='text-3xl'>{todo?.title}</h3>
                <p className='text-blue-500 text-justify py-2 font-bold'>{todo?.description?.slice(0, 180)}...</p>
                <h3 className='text-orange-500  font-bold'>Status : {todo?.status}...</h3>
            </div>
            <div className='flex justify-between mb-0'>
                {todo?.status == 'Complete' ? <span>{''}</span> : <button className='btn btn-sm btn-warning' onClick={() => handleTodoupdate(todo?._id)}>Complete Status</button>}
                <button className='btn btn-sm btn-error' onClick={() => handleTodoDelete(todo?._id)}>Delete</button>
            </div>
        </div>
    );
};

export default TodosViewCard;
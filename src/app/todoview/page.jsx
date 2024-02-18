import { getTodos } from '@/Services/todoService';
import React from 'react';
import TodosViewCard from './TodosViewCard';

const page = async () => {
    const alltodos = await getTodos()
    console.log(alltodos)
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-4'>
                {alltodos.map(todo => <TodosViewCard key={todo?._id} todo={todo}></TodosViewCard>)}
            </div>
        </div>
    );
};

export default page;
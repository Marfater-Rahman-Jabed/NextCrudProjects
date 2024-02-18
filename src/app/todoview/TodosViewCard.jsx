import React from 'react';

const TodosViewCard = ({ todo }) => {
    return (
        <div className='p-4 border-2 border-purple-300'>
            <h3 className='text-3xl'>{todo?.title}</h3>
            <p>{todo?.description}</p>
            <h3>{todo?.status}</h3>
            <div className='flex justify-between'>
                <button className='btn btn-sm btn-warning' >Update Role</button>
                <button className='btn btn-sm btn-error' >Delete</button>
            </div>
        </div>
    );
};

export default TodosViewCard;
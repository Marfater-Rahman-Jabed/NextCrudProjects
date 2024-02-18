'use client'
import { deleteuser, updateuser } from '@/Services/userService';
import React from 'react';

const UserViewCard = ({ em }) => {
    const handleDelete = async (id) => {
        console.log(id)
        const deletuser = await deleteuser(id)
        console.log(deletuser)

    }
    const handleUpdate = async (id) => {
        console.log(id)
        const updateUsers = await updateuser(id)
        console.log(updateUsers)

    }
    return (
        <div>
            <div className='p-4 border-2 border-purple-500'>
                <p className='text-xl font-semibold'>Email: {em?.email}</p>

                <p className='text-xl font-semibold'>Password: {em?.password}</p>
                <p className='font-bold'>Role:{em?.role}</p>
                <div className='flex justify-between'>
                    <button className='btn btn-sm btn-warning' onClick={() => { handleUpdate(em?._id) }}>Update Role</button>
                    <button className='btn btn-sm btn-error' onClick={() => { handleDelete(em?._id) }}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default UserViewCard;
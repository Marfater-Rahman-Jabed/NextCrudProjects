'use client'
import { postTodos } from '@/Services/todoService';
import React, { useState } from 'react';

const Todopage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmitTodos = async (e) => {
        e.preventDefault()
        const todos = {
            title, description, status
        }
        console.log(todos)

        const posttodoss = await postTodos(todos)
        console.log(posttodoss)

    }
    return (
        <div className='flex justify-center py-10'>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h3 className='text-4xl font-bold text-center'>Create Todo</h3>
                <form className="card-body" onSubmit={handleSubmitTodos}>
                    <div className="form-control" >
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" placeholder="Title" className="input input-bordered" required onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Description" className="input input-bordered" required onChange={(e) => setStatus(e.target.value)} />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text" placeholder="Status" className="input input-bordered" required onChange={(e) => setDescription(e.target.value)} />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Create Todo</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Todopage;
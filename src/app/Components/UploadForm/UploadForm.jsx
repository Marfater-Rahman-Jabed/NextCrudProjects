'use client'

import { adduser } from '@/Services/userService';
import { useRouter } from 'next/navigation';
// import { Router } from 'next/router';
import React, { useState } from 'react';

const UploadForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [image, setImage] = useState('')
    // const [previewImage, setPreviewImage] = useState('')



    const router = useRouter()
    // this code use for convert image into base64

    // const convertImageBase64 = (e) => {
    //     var reader = new FileReader()
    //     reader.readAsDataURL(e.target.files[0])
    //     reader.onload = () => {
    //         console.log(reader.result)
    //     }
    //     reader.onerror = (error) => {
    //         console.log('error', error)
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = {
            email: email,
            password: password,
            role: 'user'
        }
        console.log(userData)
        try {

            const result = await adduser(userData)

            console.log(result)
            router.push('/userview')

        } catch (error) {
            console.log(error)

        }



    }
    return (
        <div className='flex justify-center py-16'>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h3 className='text-4xl font-bold text-center'>Create User Now</h3>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control" >
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required onChange={(e) => setPassword(e.target.value)} />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadForm;
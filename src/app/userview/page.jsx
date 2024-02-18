import { getuser } from '@/Services/userService';
import React from 'react';
import UserViewCard from './UserViewCard';
// import Userview from './userview';

const page = async () => {
    const getusers = await getuser()
    // console.log(getusers)


    return (
        <div className='p-4'>
            <h3 className='text-center text-5xl font-bold py-5'>All User List Here</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                    getusers.map(em => <UserViewCard key={em._id} em={em}></UserViewCard>)
                }
            </div>
            {/* <Userview></Userview> */}
        </div>
    );
};

export default page;
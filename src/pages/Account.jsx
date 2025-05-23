import React, { useContext } from 'react';
import { CiCamera } from 'react-icons/ci';
import { IoCamera } from 'react-icons/io5';
import { AuthContext } from '../context/AuthProvider';

const Account = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-slate-100 min-h-screen border shadow-md w-full max-w-md my-6">
                <h3 className='text-xl font-medium p-6 bg-white'>Account Setting</h3>
                <div className=' '>
                    <div className='flex gap-4 p-6'>
                        <div className='w-20 h-20 relative'>
                            <img className='w-full h-full object-cover' src="https://i.ibb.co/S7t6QxJH/image.png" alt="" />
                            <div className=' inline-block rounded-full bg-purple-600 p-1 text-white absolute -right-[5px] top-[50px]'>
                                <IoCamera />
                            </div>
                        </div>
                        <div>
                            <h3 className='font-bold'>{user?.displayName}</h3>
                            <p className='font-medium'>{user?.email}</p>
                        </div>

                    </div>
                    <p className='p-6'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>

                    <div className='min-h-[300px] h-full border-2 border-l-0 border-gray-400 border-r-0 border-dashed mb-8'>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Account;
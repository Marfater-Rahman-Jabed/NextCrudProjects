'use client'
import Image from 'next/image';
// import Link from 'next/link';
import navLogo from '@/app/assets/navlogo.jpg'

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <nav className="flex items-center justify-between gap-20 bg-sky-100 px-10 py-4 " style={{ position: "sticky", top: 0, zIndex: 100 }}>
            {/* <img src="/Logo.svg" alt="navigateui logo" /> */}
            <div className='flex justify-center  items-center gap-2'>
                <Image src={navLogo} alt='' className='w-20 h-20 rounded-full'></Image>
                <h3 className='text-3xl font-bold'>Jabed Bro</h3>
            </div>
            <div className='lg:flex hidden justify-center gap-4'>
                <Link href={'/'}>Create User</Link>
                <Link href={'/userview'}>All Users</Link>
                <Link href={'/todopage'}>Create Todo</Link>
                <Link href={'/todoview'}>All Todos</Link>
            </div>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative lg:hidden flex  transition-transform">
                {dropDownState ? <span className='text-4xl font-bold '>X</span> : <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </svg>}
                {dropDownState && (
                    <ul className="absolute -right-10 z-10 mt-8 flex flex-col gap-2 bg-white px-5 pt-3 md:w-80 w-60 h-60 shadow-sm">
                        <Link className="cursor-pointer hover:text-sky-500 py-2 hover:bg-sky-400" href={'/'}>Home</Link>
                        <Link className="cursor-pointer hover:text-sky-500 py-2 hover:bg-sky-400" href={'/imagepreview'}>Image Preview</Link>
                        <li className="cursor-pointer hover:text-sky-500 py-2 hover:bg-sky-400">About</li>
                        <li className="cursor-pointer hover:text-sky-500 py-2 hover:bg-sky-400">Contact</li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
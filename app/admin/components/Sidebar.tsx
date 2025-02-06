import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo3.png'

const Sidebar = () => {
    return (
        <div className='w-[350px] h-screen shadow-lg flex flex-col justify-start '>
            <Link
                href={"/"}
                className="font-bold shadow text-2xl h-[90px] flex pl-16 pt-3 items-center"
            >
                <Image alt="logo" src={logo} className="h-[50px] w-[150px]" />
            </Link>
            <div className='pt-10'>
            <Link
                href={"/"}
                className="font-normal text-stone-800 rounded-[10px] hover:bg-zinc-100 border-b text-2xl py-3 m-5  px-10 flex justify-start items-center"
            >
                <span>Statics</span>
            </Link>
            <Link
                href={"/"}
                className="font-normal text-stone-800 rounded-[10px] hover:bg-zinc-100 border-b text-2xl py-3 m-5  px-10 flex justify-start items-center"
            >
                <span>All users</span>
            </Link>
            <Link
                href={"/"}
                className="font-normal text-stone-800 rounded-[10px] hover:bg-zinc-100 border-b text-2xl py-3 m-5  px-10 flex justify-start items-center"
            >
                <span>All files</span>
            </Link>
           
            </div>
        </div>
    )
}

export default Sidebar

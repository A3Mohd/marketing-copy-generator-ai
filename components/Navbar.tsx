import Link from 'next/link'
import React, { useState } from 'react'
import { BsTwitter } from "react-icons/bs"
import {BsGithub} from 'react-icons/bs'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center p-4 border-b border-b-gray-400'>
                <h2 className='font-bold '>A3 <span className="text-teal-500">COPYAI</span></h2>
                <div className="flex gap-2">
                    <Link href="https://twitter.com/abdi_a3">
                    <BsTwitter className="text-[#00acee]" size={20} />
                    </Link>
                    <Link href="https://github.com/A3Mohd">
                    <BsGithub  size={20}/>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar
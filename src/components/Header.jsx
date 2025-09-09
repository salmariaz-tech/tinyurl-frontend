import React, { useState } from 'react'
import { FaQuestion } from "react-icons/fa6";

const Header = () => {

    const [isHelpAbbrOpen, setIsHelpAbbrOpen] = useState(false)

    const handleHelpAbbrClose = () => {
        setIsHelpAbbrOpen(false)
    }
    const handleHelpAbbrOpen = () => {
        setIsHelpAbbrOpen(true)
    }
    return (
        <div className='sticky top-0 bg-[#013251] text-white flex justify-between items-center py-4 px-8'>
            {/* Left Side */}
            <div className=' text-4xl font-extrabold'>
                <a href="http://localhost:5173/">TINYURL</a>
            </div>
            {/* Right Side */}
            <div className='flex items-center gap-x-2'>
                <div className='relative'>

                    {/* Question mark */}
                    <div className='bg-[#0980A1] p-2 rounded-full cursor-pointer' onMouseOver={handleHelpAbbrOpen} onMouseLeave={handleHelpAbbrClose}>
                        <FaQuestion />
                    </div>

                    {/* On Hover */}
                    {isHelpAbbrOpen && <div className='bg-[#0980A1] p-2 rounded absolute top-9 -left-2'>
                        Help
                    </div>}
                </div>
                <div className='flex bg-[#0980A1]  rounded gap-x-2'>
                    <div className='hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded'>
                        My URLs
                    </div>
                    <div className='hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded'>
                        Plans
                    </div>
                    <div className='hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded'>
                        Blogs
                    </div>
                    <div className='hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded'>
                        Features
                    </div >
                    <div className='hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded'>
                        Sign Up
                    </div>
                    <div className='hover:bg-[#10BDE5] hover:cursor-pointer px-[14px] py-[10px] rounded'>
                        Sign In
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header


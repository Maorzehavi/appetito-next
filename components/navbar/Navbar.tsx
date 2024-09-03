'use client'
import Link from 'next/link'
import React from 'react'
import DarkMode from './DarkMode'
import Logo from './Logo'
import NavItems from './NavItems'

function Navbar() {
    return (
        <div className='boeder-b pt-1'>
            <nav className='sm:flex sm:flex-row sm:justify-between sm:items-center gap-1 p-4'>
                <div className='flex gap-1 justify-between w-full items-center'>
                    <Logo />
                    <div className='hidden md:flex'>
                        <NavItems />
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <DarkMode />
                        <div className='md:hidden'>
                            <NavItems />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
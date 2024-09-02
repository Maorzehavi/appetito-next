'use client'
import { ThemeContext } from '@/context/ThemeContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { GoMoon, GoSun } from 'react-icons/go'

function Navbar() {
    const { changeTheme, theme } = useContext(ThemeContext)
    console.log(theme)
    return (
        <div>
            <ul className='flex justify-between pt-5 items-center'>
                <div>
                    <Link href='/'>
                        <li>Home</li>
                    </Link>
                </div>
                <div className='flex gap-5'>
                    <button className='btn btn-ghost hover:text-pink-400 btn-md hover:bg-inherit hover:translate-x-1' onClick={() => {
                        changeTheme(theme === 'garden' ? 'dracula' : 'garden')
                    }}>{theme=== 'garden'? <GoMoon className='w-6 h-6 text-inherit'/> : <GoSun className='h-6 w-6 text-inherit'/>}</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar
import Link from 'next/link'
import React from 'react'
import { LuPizza } from 'react-icons/lu'
function Logo() {
    return (
        <button className="btn btn-sm rounded-full">
            <Link href='/'>
                <LuPizza className='w-6 h-6' />
            </Link>
        </button>
    )
}

export default Logo
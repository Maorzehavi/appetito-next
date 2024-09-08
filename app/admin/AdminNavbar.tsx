import Link from 'next/link'
import React from 'react'
import { adminLinks } from '@/utils/links'

function AdminNavbar() {
    return (
        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center gap-1 p-4 w-96 mx-auto text-2xl'>
            <ul className='flex flex-row mx-auto gap-8 items-center justify-between sm:gap-2 '>
                {adminLinks.reverse().map((link) => {
                    return (
                        <li key={link.title}>
                            <Link href={link.href} className='btn btn-ghost text-lg'>{link.title}</Link>
                        </li>
                    )
                }
                )}
            </ul>

        </div>
    )
}

export default AdminNavbar
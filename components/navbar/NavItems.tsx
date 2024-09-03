import React from 'react'
import {links} from '@/utils/links'
import { HiMenuAlt3 } from "react-icons/hi";
import Link from 'next/link';

function NavItems() {
  return (
    <div className='p-2'>
        <ul className='hidden md:flex gap-2'>
            {links.reverse().map((link) => {
            return (
                <li key={link.title}>
                <Link href={link.href} className='btn btn-ghost'>{link.title}</Link>
                </li>
            )
            })}
        </ul>
    <details className="dropdown dropdown-end md:hidden">
  <summary className="btn m-1 btn-ghost rounded-btn"><HiMenuAlt3 className='h-6 w-6'/></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52  shadow">
          {links.reverse().map((link) => {
            return (
                <li key={link.title}>
                <Link href={link.href} className='btn btn-ghost'>{link.title}</Link>
                </li>
            )
          }
            )}
        </ul>
      </details>
    </div>
  )
}

export default NavItems
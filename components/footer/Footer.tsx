'use client'
import React from 'react'
import Logo from '../navbar/Logo'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LiaSlackHash } from 'react-icons/lia';
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import Link from 'next/link';
function Footer() {
    return (
        <footer className="footer footer-center   pb-4">
            <aside>
                <Logo footer={true} />

                <p className='flex flex-col gap-y-2'>
                    <span>כל הזכויות שמורות</span>
                    <span>©{new Date().getFullYear()}</span>
                </p>            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 ">
                    <LiaSlackHash className='h-7 w-7 my-auto mr-3' />
                    <a href="https://wa.me/972538220025" target="_blank" rel="noreferrer" className="btn btn-ghost">
                        <FaWhatsapp className='h-8 w-8' />
                    </a>
                    <a href="https://www.instagram.com/appetito.bar/" target="_blank" rel="noreferrer" className="btn btn-ghost">
                        <FaInstagram className='h-8 w-8' />
                    </a>
                </div>
            </nav>
            <SignedIn>
            <div className='flex'>
                <SignOutButton redirectUrl='/'> התנתק </SignOutButton>
                <Link href='/admin'>ניהול</Link>
            </div>
            </SignedIn>
            <SignedOut>
                <SignInButton forceRedirectUrl={'/admin'}>ניהול
                </SignInButton>
            </SignedOut>
        </footer>
    )
}

export default Footer
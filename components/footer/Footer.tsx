'use client'
import React from 'react'
import Logo from '../navbar/Logo'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LiaSlackHash } from 'react-icons/lia';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="footer footer-center   p-10">
            <aside>
                <Logo footer={true} />
                <p className="font-bold">

                    <br />

                </p>
                <p>כל הזכויות שמורות ©{new Date().getFullYear()}</p>
            </aside>
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
            <Link href={'/admin'}>ניהול</Link>
        </footer>
    )
}

export default Footer
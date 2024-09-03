import Link from 'next/link'
import React, { useContext } from 'react'
import logoBlack from '@/public/appetito-logo-trans.png'
import logoWhite from '@/public/appetito-logo-white.png'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'
function Logo() {
    const { theme } = useContext(ThemeContext)
    return (
        <>
            {
                theme === 'retro' ? (
                    <Link href='/'>
                        <Image src={logoBlack} alt='Appetito' width={100} height={50} />
                    </Link>
                ) : (
                    <Link href='/'>

                        <Image src={logoWhite} alt='Appetito' width={100} height={50} />

                    </Link>
                )

            }

        </>

    )
}

export default Logo
import Link from 'next/link'
import React, { useContext } from 'react'
import logoBlack from '@/public/appetito-logo-trans.png'
import logoWhite from '@/public/appetito-logo-white.png'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'
function Logo(props: {footer?: boolean}) {
    const { theme } = useContext(ThemeContext)
    const className = `${props.footer? 'w-60' : 'w-40'} hover:scale-110 transition-transform duration-300`
    return (
        <>
            {
                theme === 'retro' ? (
                    <Link href='/'>
                        <Image src={logoBlack} alt='Appetito'  className={className} />
                    </Link>
                ) : (
                    <Link href='/'>

                        <Image src={logoWhite} alt='Appetito' className={className}/>

                    </Link>
                )

            }

        </>

    )
}

export default Logo
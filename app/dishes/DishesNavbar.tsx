import Link from 'next/link'
import React from 'react'

function DishesNavbar() {
    return (
        <div className='sm:flex sm:flex-row sm:justify-between sm:items-center gap-1 p-4 w-96 mx-auto'>
            <Link href={'/dishes/pizza'}>פיצות</Link>
            <Link href={'/dishes/pasta'}>פסטות</Link>
        </div>
    )
}

export default DishesNavbar
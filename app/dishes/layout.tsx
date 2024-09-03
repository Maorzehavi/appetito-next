import React from 'react'
import DishesNavbar from './DishesNavbar'

function DishesLayout({children}:{children: React.ReactNode}) {
  return (
    <div>
        <DishesNavbar/>
        {children}
    </div>
  )
}

export default DishesLayout
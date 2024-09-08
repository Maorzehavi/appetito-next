import React from 'react'
import DishesNavbar from './AdminNavbar'
import AdminNavbar from './AdminNavbar'

function DishesLayout({children}:{children: React.ReactNode}) {
  return (
    <div>
        <AdminNavbar/>
        {children}
    </div>
  )
}

export default DishesLayout

import DishesTable from '@/components/dishes/DishesTable';
import Link from 'next/link';
import React from 'react'

function AdminPage() {
  return (
    <>
    <Link href="/admin/dishes/create">
      <button className="btn btn-primary">הוסף מנה</button>
    </Link>

    </>

  )
}

export default AdminPage
import DishItem from '@/components/dishes/DishItem'
import React from 'react'

function page({ params }: { params: { dishId: string } }) {


  return (
    <div><DishItem dishId={params.dishId} />
    </div>
  )
}

export default page
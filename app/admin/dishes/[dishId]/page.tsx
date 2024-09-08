import React from 'react'

function page({ params }: { params: { dishId: string } }) {
  return (
    <div>DishPage
        <div>{params.dishId}</div>
    </div>
  )
}

export default page
import { Dish } from '@/utils/types'
import React from 'react'
import DishCard from './DishCard'

function DishesList({ dishes }: { dishes: Dish[] }) {
  return (
    <div className="max-w-full mx-8 pb-8">
      {/* Removed justify-center to allow the cards to align as per the card layout */}
      <div className="flex overflow-x-auto gap-4 flex-wrap">
        {
          dishes.map((dish, index) => (
            <DishCard key={index} name={dish.name} description={dish.description!} image={dish.image!} />
          ))
        }
      </div>
    </div>
  );
}

export default DishesList;

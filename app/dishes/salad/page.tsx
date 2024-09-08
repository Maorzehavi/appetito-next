'use client'
import Toast from '@/components/Toast';
import { fetchDishesAction } from '@/utils/actions';
import { Dish } from '@prisma/client';
import React, { useEffect, useState } from 'react'

function SaladPage() {
  const [dishes, setDishes] = useState<Dish[]>([]); // Use the Dish type here

  useEffect(() => {
    async function fetchDishes() {
      const result = await fetchDishesAction('SALAD');
      if ('dishes' in result) {
        setDishes(result.dishes);
      } else {
        <Toast message={result.message} />
      }
    }
    fetchDishes();
  }, []);

  return (
    <div>{
      dishes.map((dish, index) => (
        <div key={index}>
          <h1>{dish.name}</h1>
          <p>{dish.description}</p>
          <img src={dish.image!} alt={dish.name} />
        </div>
      ))
    }
    </div>
  )
}

export default SaladPage
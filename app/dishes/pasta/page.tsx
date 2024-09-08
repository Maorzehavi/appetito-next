'use client'
import DishCard from '@/components/dishes/DishCard';
import Toast from '@/components/Toast';
import { fetchDishesAction } from '@/utils/actions';
import { Dish } from '@prisma/client';
import React, { useEffect, useState } from 'react'

function PastaPage() {
  const [dishes, setDishes] = useState<Dish[]>([]); // Use the Dish type here

  useEffect(() => {
    async function fetchDishes() {
      const result = await fetchDishesAction('PASTA');
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
        <DishCard key={index} name={dish.name} description={dish.description!} image={'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'} />
      ))
    }
    </div>
  )
}

export default PastaPage
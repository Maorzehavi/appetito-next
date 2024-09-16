'use client'
import DishCard from '@/components/dishes/DishCard';
import DishesList from '@/components/dishes/DishesList';
import Toast from '@/components/Toast';
import { fetchDishesAction } from '@/utils/actions';
import { Dish } from '@prisma/client';
import React, { useEffect, useState } from 'react'

function PizzaPage() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message

  useEffect(() => {
    async function fetchDishes() {
      const result = await fetchDishesAction('SALAD');
      if ('dishes' in result) {
        setDishes(result.dishes);
      } else {
        setErrorMessage(result.message); // Update state with error message
      }
    }
    fetchDishes();
  }, []);

  return (
    <>
      {errorMessage && <Toast message={errorMessage} />} {/* Conditionally render Toast if there's an error */}
      <DishesList dishes={dishes}/>
    </>
  );
}

export default PizzaPage;

'use client'
import { catigores, Dish } from '@/utils/types'
import React, { useEffect, useState } from 'react'
import FormContainer from '../form/FormContainer'
import FormInput from '../form/FormInput'
import TextAreaInput from '../form/TextAreaInput'
import SelectInput from '../form/SelectInput'
import SubmitButton from '../form/Buttons'
import { fetchDishAction, updateDishAction, updateDishImageAction } from '@/utils/actions'
import ImageInputContainer from '../form/ImageInputContainer'
import Toast from '../Toast'

function DishItem({ dishId }: { dishId: string }) {
    // here i will display the dish details and the form to update the dish or delete it
    const [dish, setDish] = useState({} as Dish)
    useEffect(() => {
        async function fetchDishes() {
            const result = await fetchDishAction(dishId);

            if ('dish' in result) {
                setDish(result.dish as Dish);
            } else {
                <Toast message={result.message} />
            }
        }
        fetchDishes();
    }, []);
    return (
        <section className='flex items-center flex-col'>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>{dish.name}</h1>
            <div className=' p-8 rounded-md max-w-lg '>
                <FormContainer action={updateDishAction}>
                    <div className='grid gap-4 mt-4 '>
                        <FormInput hidden={true} type='text' name='id' defaultValue={dish.id} />
                        <FormInput type='text' name='name' label='שם המנה' placeholder={dish.name} defaultValue={dish.name} />
                        <TextAreaInput name='description' label='תיאור המנה' placeholder={dish.description!} defaultValue={dish.description!}  />
                        <SelectInput name='category' label='קטגוריה' options={catigores} defaultValue={dish.category} />
                    </div>
                    <div className='flex items-center'>
                        <SubmitButton text='עדכון מנה' className='mt-8 mx-auto' />
                    </div>
                </FormContainer>
                <ImageInputContainer
                    image={dish.image!}
                    name={dish.name}
                    action={updateDishImageAction}
                    text='Update Dish Image'
                >
                    <FormInput hidden={true} type='text' name='id' defaultValue={dish.id} />

                </ImageInputContainer>
            </div>
        </section>
    )
}

export default DishItem
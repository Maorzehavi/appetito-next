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
import ImageInput from '../form/ImageInput'
import Image from 'next/image'

async function DishItem({ dishId }: { dishId: string }) {
    const [showImageForm, setShowImageForm] = useState(false);
    const dish = await fetchDishAction(dishId);


    return (
        <section>
            <h1 className='text-3xl font-semibold mb-8 capitalize text-center mt-8'>{dish.name}</h1>
            <div className='flex flex-row gap-8 justify-center items-center'>
                {/* Image Update Section */}
                <div className='flex flex-col items-center'>
                    <ImageInputContainer
                        image={dish.image!}
                        name={dish.name}
                        action={updateDishImageAction}
                        text='עדכון  תמונה'
                    >
                        <FormInput hidden={true} type='text' name='id' defaultValue={dish.id} />
                    </ImageInputContainer>
                    {/* <Image
                        src={dish.image!}
                        width={400}
                        height={300}
                        className={`rounded-md object-cover mb-4 transition-opacity  'opacity-100'`}
                        alt={dish.name}
                    />
                    {showImageForm ? (
                        <FormContainer action={updateDishImageAction}>
                            <FormInput hidden={true} type='text' name='id' defaultValue={dish.id} />
                            <ImageInput />
                            <SubmitButton size='sm' text='עדכון תמונה' />
                        </FormContainer>
                    ) : (<button
                        className='btn btn-wide mt-8 transition-transform hover:scale-105 focus:outline-none'
                        onClick={() => setShowImageForm(prev => !prev)}
                        aria-expanded={showImageForm}
                        aria-controls="image-update-form"
                    >
                        עדכון תמונה
                    </button>)} */}


                </div>

                <div className="divider divider-horizontal mx-4"></div>

                {/* Dish Info Update Section */}
                <section className='flex items-center flex-col w-1/2'>
                    <div className='p-8 rounded-md w-full'>
                        <FormContainer action={updateDishAction}>
                            <div className='grid gap-4 mt-4'>
                                <FormInput hidden={true} type='text' name='id' defaultValue={dish.id} />
                                <FormInput type='text' name='name' label='שם המנה' placeholder={dish.name} defaultValue={dish.name} />
                                <TextAreaInput name='description' label='תיאור המנה' placeholder={dish.description!} defaultValue={dish.description!} />
                                <SelectInput name='category' label='קטגוריה' options={catigores} defaultValue={dish.category} />
                            </div>
                            <div className='flex items-center'>
                                <SubmitButton text='עדכון פרטי מנה' className='mt-8 mx-auto' />
                            </div>
                        </FormContainer>
                    </div>
                </section>
            </div>
        </section>

    )
}

export default DishItem

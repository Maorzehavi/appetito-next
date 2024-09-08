import SubmitButton from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import SelectInput from '@/components/form/SelectInput'
import { createDishAction } from '@/utils/actions'
import React from 'react'

function AdminDishesPage() {
  return (
    <section className='flex items-center flex-col'>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>הוסף מנה</h1>
      <div className=' p-8 rounded-md max-w-lg '>
        <FormContainer action={createDishAction}>
          <div className='grid gap-4 mt-4 '>
            <FormInput type='text' name='name' label='שם המנה' placeholder={'שם המנה'} />
            <FormInput type='text' name='description' label='תיאור המנה' placeholder={'תיאור המנה'} />
            <SelectInput name='category' label='קטגוריה' options={[
              { name: 'פיצה', value: 'PIZZA' },
              { name: 'פסטה', value: 'PASTA' },
              { name: 'סלט', value: 'SALAD' },
              { name: 'אחר', value: 'OTHER' },
            ]} />
          </div>
          <div className='flex items-center'>
            <SubmitButton text='הוסף מנה' className='mt-8 mx-auto' />
          </div>
        </FormContainer>
      </div>
    </section>
  )
}

export default AdminDishesPage
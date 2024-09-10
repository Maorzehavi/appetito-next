'use client'
import { actionFunction } from '@/utils/types'
import Image from 'next/image';
import React, { useState } from 'react'
import { CiImageOff } from "react-icons/ci";
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import SubmitButton from './Buttons';

type ImageInputContainerProps = {
    image: string
    name: string
    action: actionFunction
    text: string
    children?: React.ReactNode
}


function ImageInputContainer(props: ImageInputContainerProps) {
    const { image, name, action, text } = props
    const [isUpdateFromVisible, setIsUpdateFormVisible] = useState(false)

    const imageIcon = (
        <CiImageOff className='w-24 h-24 bg-primary rounded-md text-white mb-4' />
    )
    return (
        <div>
            {image ? (
                <Image
                    src={image}
                    width={100}
                    height={100}
                    className="rounded-md object-cover mb-4 w-24 h-24"
                    alt={name}
                />
            ) : (
                imageIcon
            )}
            <button className='btn btn-primary' onClick={() => setIsUpdateFormVisible((prev) => !prev)}
            >{text}</button>
            {isUpdateFromVisible && (
                <div className='max-w-lg mt-4'>
                    <FormContainer action={action}>
                        {props.children}
                        <ImageInput/>
                        <SubmitButton size='sm'/>
                    </FormContainer>
                </div>
            )}
        </div>
    )
}

export default ImageInputContainer
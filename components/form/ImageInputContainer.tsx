'use client'
import { actionFunction } from '@/utils/types'
import Image from 'next/image';
import React, { useState } from 'react'
import { CiImageOff } from "react-icons/ci";
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import SubmitButton from './Buttons';

type ImageInputContainerProps = {
    image: string;
    name: string;
    action: actionFunction;
    text: string;
    children?: React.ReactNode;
}

function ImageInputContainer({ image, name, action, text, children }: ImageInputContainerProps) {
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggleFormVisibility = () => {
        setIsUpdateFormVisible(prev => !prev);
    }

    const imageIcon = (
        <CiImageOff className='w-24 h-24 bg-primary rounded-md text-white mb-4' />
    );

    return (
        <div className='flex flex-col items-center'>
            {image ? (
                <div className='relative'>
                    {loading && (
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-md">
                            <span>Loading...</span>
                        </div>
                    )}
                    <Image
                        src={image}
                        width={400}
                        height={300}
                        className={`rounded-md object-cover mb-4 transition-opacity ${loading ? 'opacity-0' : 'opacity-100'}`}
                        alt={name}
                        onLoadingComplete={() => setLoading(false)}
                    />
                </div>
            ) : (
                imageIcon
            )}

            <button
                className='btn btn-wide mt-8 transition-transform hover:scale-105 focus:outline-none'
                onClick={toggleFormVisibility}
                aria-expanded={isUpdateFormVisible}
                aria-controls="image-update-form"
            >
                {text}
            </button>

            {isUpdateFormVisible && (
                <div id="image-update-form" className='w-full mt-4 p-4 rounded-lg shadow-md'>
                    <FormContainer action={action}>
                        {children}
                        <ImageInput />
                        <SubmitButton size='sm' />
                    </FormContainer>
                </div>
            )}
        </div>
    );
}

export default ImageInputContainer;

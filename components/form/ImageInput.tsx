'use client'
import React from 'react'

function ImageInput() {
    const name = 'image'
    return (
        <label htmlFor={name} className='form-control w-full max-w-xs'>
            <div className="label">
                <span className="label-text text-right">בחר תמונה</span>
            </div>
            <input type='file' name={name} id={name} className='file-input file-input-bordered w-full max-w-sm' />
        </label>
    )
}

export default ImageInput;

import React from 'react'

function ImageInput() {
    const name = 'image'
    return (
        <label htmlFor={name} className='form-control w-full max-w-xs mt-4'>
            <div className="label">
                <span className="label-text text-right">בחר תמונה</span>
            </div>
        </label>
    )
}

export default ImageInput
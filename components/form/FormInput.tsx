import React from 'react'


type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
};


function FormInput(props: FormInputProps) {

    const { name, type, label, defaultValue, placeholder } = props;
    return (
        <div className='mb-2'>
            <label htmlFor={name} className='form-control w-full max-w-sm'>
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
                <input type={type} placeholder={placeholder} defaultValue={defaultValue} className="input w-full max-w-sm" />
            </label>
        </div>
    )
}

export default FormInput
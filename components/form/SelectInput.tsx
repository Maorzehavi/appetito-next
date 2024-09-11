"use client"
import React from 'react'

type SelectInputProps = {
    name: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
    options: { name: string, value: string }[];
};


function SelectInput(props: SelectInputProps) {
    const { name, label, defaultValue, placeholder, options } = props;
    return (
        <label htmlFor={name} className='form-control w-full max-w-sm'>
            <div className="label">
                <span className="label-text">{label ? label : ''}</span>
            </div>
            <select className='select select-bordered text-right' name={name} defaultValue={defaultValue}>
                <option disabled selected={defaultValue ? false : true} value="">
                    {placeholder ? placeholder : 'בחר קטגוריה'}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </label>
    );
}


export default SelectInput
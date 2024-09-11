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
        <div className="w-full flex justify-center mb-2"> {/* Center the input */}
            <label htmlFor={name} className='form-control w-full'>
                <div className="label">
                    <span className="label-text">{label ? label : ''}</span>
                </div>
                <select
                    className='select select-bordered w-full text-right'
                    name={name}
                    defaultValue={defaultValue || ""} // auto-select the current category
                >
                    <option disabled value="">
                        {placeholder ? placeholder : 'בחר קטגוריה'}
                    </option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default SelectInput;

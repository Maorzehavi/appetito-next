import React from 'react';

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
    hidden?: boolean;
};

function FormInput(props: FormInputProps) {
    const { name, type, label, defaultValue, placeholder, hidden } = props;
    return (
        <div className='mb-2 w-full'>
            <label htmlFor={name} className='form-control w-full'>
                <div className="label">
                    <span className="label-text text-right">{label}</span>
                </div>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    className="input input-bordered w-full text-right"
                    hidden={hidden ? hidden : false}
                />
            </label>
        </div>
    );
}

export default FormInput;

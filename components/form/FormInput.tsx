import React from 'react'


type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
    hidden?: boolean;
};


function FormInput(props: FormInputProps) {
    const { name, type, label, defaultValue, placeholder } = props;
    return (
        <div className='mb-2'>
            <label htmlFor={name} className='form-control w-full max-w-sm'>
                <div className="label">
                    <span className="label-text text-right">{label}</span>
                </div>
                <input
                    type={type}
                    name={name} // Ensure name is passed to the input field
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    className="input input-bordered w-full max-w-sm text-right"
                    hidden={props.hidden ? props.hidden : false}
                />
            </label>
        </div>
    );
}


export default FormInput
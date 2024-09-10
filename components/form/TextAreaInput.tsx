import React from 'react'
type TextAreaInputProps = {
    name: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
};

function TextAreaInput(props: TextAreaInputProps) {
    const { name, label, defaultValue, placeholder } = props;
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <textarea
                className="textarea textarea-bordered h-24 text-right"
                name={name} // Ensure name is passed to the input field
                placeholder={placeholder}
                defaultValue={defaultValue}
            />
            <div className="label">
            </div>
        </label>
    );

}

export default TextAreaInput
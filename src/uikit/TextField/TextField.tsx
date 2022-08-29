import React, { DOMAttributes } from 'react';
import './TextField.css';

interface IProps extends DOMAttributes<HTMLButtonElement> {
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    width?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextField: React.FC<IProps> = ({
    type,
    name,
    value,
    placeholder,
    disabled,
    error,
    width,
    onChange,
    ...props
}) => {
    return (
        <input
            className={error ? 'text_field input_error' : 'text_field'}
            name={name}
            type={type}
            value={value}
            disabled={disabled}
            width={width}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
        />
    );
};

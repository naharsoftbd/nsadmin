import React from 'react';

export default function Select({id, name, onChange, className, options, placeholder, required, value }) {
    return (
        <>
            <select
                value={value} //added
                className={
                    `border-gray-300 focus:border-indigo-200 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-xl shadow-sm sm:text-sm` +
                    className
                }
                name={name}
                required={required}
                id={id}
                onChange={onChange}>
                <option>{placeholder}</option>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </>
    );
} 
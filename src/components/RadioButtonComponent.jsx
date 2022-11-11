import React from 'react';

export default function RadioButtonComponent({
    label, state, value, onChange
}) 
{
    return (
        <label>
        <input
            required
            // name = 'engine'
            type="radio"
            checked={state === value}
            onChange= {() => onChange(value)}
        />
        {label}
        </label>
    )
}

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./hooks.css";

function InputField() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => setInputValue(e.target.value);

    return (
        <div className='hooksbody'>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default InputField;
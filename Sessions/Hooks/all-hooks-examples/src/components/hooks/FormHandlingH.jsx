/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./hooks.css";

function FormHandling() {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <div className='hooksbody'>
            <form  onSubmit={handleSubmit}>
                <input style={{margin: 10}}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input style={{margin: 10}}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormHandling;
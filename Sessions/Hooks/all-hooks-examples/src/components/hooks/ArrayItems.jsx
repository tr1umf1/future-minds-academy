/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./hooks.css";

function ArrayItems() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ArrayItems;
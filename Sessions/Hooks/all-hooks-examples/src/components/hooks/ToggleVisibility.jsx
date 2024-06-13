/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./hooks.css";

function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(true);

    const toggle = () => setIsVisible(!isVisible);

    return (
        <div className='hooksbody'>
            <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'} Text</button>
            {isVisible && <p>This is a toggled text.</p>}
        </div>
    );
}

export default ToggleVisibility;
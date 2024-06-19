/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function FetchData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => setData(data));
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <div>
            <h1>Fetched Data</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
}

export default FetchData;
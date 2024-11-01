import React from 'react';

const groceries = ['Apples', 'Bananas', 'Carrots'];

const Groceries = () => {
    return (
        <ul>
            {groceries.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default Groceries;
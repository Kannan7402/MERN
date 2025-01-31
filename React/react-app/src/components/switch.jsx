import React, { useState } from 'react';

function Day() {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    function handleChange(event) {
        setInput(event.target.value);
    }

    const getWorkdayMessage = (inputDay) => {
        switch (inputDay) {
            case 'monday':
                return ' kannan comes to work on Monday';
            case 'tuesday':
                return 'bala comes to work on Tuesday';
            case 'wednesday':
                return 'rathesh comes to work on Wednesday';
            case 'thursday':
                return 'lokesh comes to work on Thursday';
            default:
                return 'No one works on this day';
        }
    };

    const handleSubmit = () => {
        setMessage(getWorkdayMessage(input));
    };

    return (
        <>
            <h1>Day Work</h1>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Enter a day"
            />
            <button onClick={handleSubmit}>Submit</button>
            <h2>{message}</h2>
        </>
    );
}

export default Day;

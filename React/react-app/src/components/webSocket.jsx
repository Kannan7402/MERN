import React, { useState, useEffect } from 'react';

function ChatComponent() {
    const [messages, setMessages] = useState([]);
    const [connectionStatus, setConnectionStatus] = useState('disconnected');

    useEffect(() => {
        const socket = new WebSocket('wss://echo.websocket.org');

        socket.onopen = () => {
            console.log('Connected to the WebSocket server');
            setConnectionStatus('connected');
        };

        socket.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        socket.onerror = (error) => {
            console.log('WebSocket Error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
            setConnectionStatus('disconnected');
        };
        return () => {
            console.log('Disconnected');
            socket.close();
        };
    }, []);
    
    return (
        <div>
            <h2>Chat Messages (Status: {connectionStatus})</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
}

export default ChatComponent;

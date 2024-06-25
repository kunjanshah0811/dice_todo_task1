import React, { useState, useEffect } from 'react';
import userImage from './person.png';
import chatbotImage from './chatbot.jpg';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
        addMessage({ sender: 'chatbot', text: "Hello! I'm Chatbot. How can I help you today?" });
    }, []);

    const handleMessageSubmit = async (message) => {
        addMessage({ sender: 'user', text: message });
        try {
            const response = await fetch('http://127.0.0.1:5000/reverse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: message }),
            });

            const data = await response.json();
            await new Promise(resolve => setTimeout(resolve, 600));
            addMessage({ sender: 'chatbot', text: data.reversed });
        } catch (error) {
            console.error('Error:', error);
            addMessage({ sender: 'chatbot', text: 'Sorry, something went wrong.' });
        }
    };

    const addMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleMessageSubmit(inputMessage);
        setInputMessage('');
    };

    return (
        <div>
            <button
                className="action-button"
                onClick={handleOpen}
            >
                Open Chatbot
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg w-full max-w-md p-4">
                        <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold py-2 px-4 rounded-lg bg-blue-500 text-white">
                            Welcome to DICE Group Chatbot
                        </h2>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={handleClose}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="chatbot-messages h-64 overflow-y-auto mb-4 border p-2 rounded">
                            {messages.map((message, index) => (
                                <div 
                                    key={index} 
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
                                >
                                    <div className="flex items-center">
                                        {message.sender === 'user' ? (
                                            <img src={userImage} alt="User" className="w-8 h-8 rounded-full mr-2" />
                                        ) : (
                                            <img src={chatbotImage} alt="Chatbot" className="w-8 h-8 rounded-full mr-2" />
                                        )}
                                        <div className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                                            {message.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit} className="flex">
                            <input
                                type="text"
                                name="message"
                                placeholder="Type your message..."
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                className="flex-1 p-2 border rounded-l"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-r"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
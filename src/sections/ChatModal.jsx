import React, { useState } from 'react';

function ChatModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, fromUser: true }]);
            setNewMessage('');
        }
    };

    return (
        <div>
            {/* Floating Chat Icon */}
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 btn btn-circle btn-primary shadow-lg"
            >
                💬
            </button>

            {/* Chat Modal */}
            {isOpen && (
                <div className="fixed bottom-16 right-6 bg-white w-80 rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-primary p-4 text-white flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Chat Support</h3>
                        <button onClick={toggleChat} className="btn btn-xs btn-circle btn-ghost text-white">
                            ✕
                        </button>
                    </div>

                    <div className="p-4 max-h-60 overflow-y-auto">
                        {messages.length > 0 ? (
                            messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 flex ${message.fromUser ? 'justify-end' : 'justify-start'
                                        }`}
                                >
                                    <div
                                        className={`${message.fromUser ? 'bg-blue-500' : 'bg-gray-300'
                                            } p-2 rounded-lg text-white max-w-xs`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No messages yet.</p>
                        )}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 bg-gray-100">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="input input-bordered w-full"
                            placeholder="Type your message..."
                            required
                        />
                        <button type="submit" className="btn btn-primary w-full mt-2">
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ChatModal;

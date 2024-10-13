'use client'

import React, { useState } from 'react';
import {
  Send,
  Paperclip,
  Smile,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const messages = [
  {
    id: 1,
    sender: 'Qojva Salvatoc',
    content: 'Hello! How can I help you today?',
    time: '10:30 AM',
  },
  {
    id: 2,
    sender: 'User',
    content: 'I have a question about my account settings.',
    time: '10:32 AM',
  },
  {
    id: 3,
    sender: 'Qojva Salvatoc',
    content:
      "Sure, I'd be happy to help. What specific setting are you having trouble with?",
    time: '10:33 AM',
  },
];

const userInfo = {
  name: 'Qojva Salvatoc',
  email: 'qojvasalvatoc@example.com',
  image: '/avatar.png',
  attachments: [
    { name: 'account_details.pdf', size: '2.3 MB' },
    { name: 'profile_picture.jpg', size: '1.1 MB' },
  ],
};

const FullChatPage = () => {
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

  return (
    <div className='w-full overflow-hidden bg-white flex h-full text-black'>
      <div className={`flex-1 flex flex-col ${isUserInfoOpen ? 'w-3/4' : 'w-full'}`}>
        <header className="p-4 flex items-center justify-between bg-gray-50">
          <div className="flex items-center">
            <img 
              src={userInfo.image} 
              alt={userInfo.name} 
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h2 className="font-semibold">{userInfo.name}</h2>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
          <button 
            onClick={() => setIsUserInfoOpen(!isUserInfoOpen)}
            className="p-2 hover:bg-gray-200 rounded-full"
            aria-label={isUserInfoOpen ? 'Hide user information' : 'Show user information'}
          >
            {isUserInfoOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </header>
        
        <div className="flex-1 overflow-auto p-4">
          {messages.map(
            (message) => (
              <div
                key={message.id}
                className={`mb-4 ${message.sender === 'User' ? 'text-right' : ''}`}
              >
                <div
                  className={`inline-block max-w-xs md:max-w-md ${message.sender === 'User' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg p-3`}
                >
                  <p>{message.content}</p>
                  <span className="text-xs opacity-75 mt-1 block">
                    {message.time}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-2">
            <button className="p-2 hover:bg-gray-200 rounded-full" aria-label="Attach file">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow bg-transparent mx-2"
            />
            <button className="p-2 hover:bg-gray-200 rounded-full" aria-label="Add emoji">
              <Smile size={20} />
            </button>
            <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600" aria-label="Send message">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`bg-gray-50 overflow-auto transition-all duration-300 ease-in-out ${
          isUserInfoOpen ? 'w-1/4' : 'w-0'
        }`}
      >
        <div className="p-4">
          <h3 className="font-semibold">User Information</h3>
        </div>
        <div className="p-4">
          <img src={userInfo.image} alt={userInfo.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
          <h4 className="text-center font-semibold mb-1">{userInfo.name}</h4>
          <p className="text-center text-sm text-gray-500 mb-4">{userInfo.email}</p>
          <h5 className="font-semibold mb-2">Attachments</h5>
          <ul className="space-y-2">
            {userInfo.attachments.map(
              (attachment, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 bg-white rounded-lg"
                >
                  <span className="text-sm truncate">
                    {attachment.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {attachment.size}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FullChatPage;

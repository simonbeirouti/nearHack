'use client'

import React, { Fragment, useState } from 'react';
import { Search, X } from 'lucide-react';
import FullChatPage from './FullChatPage';

const chats = [
  {
    avatar: '/avatar.png',
    name: 'Jane Smith',
    message: 'New project update!',
    time: '1h ago',
    isOnline: true,
  },
];

const ChatInterfacePage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const clearSearch = () => {
    setSearchInput('');
  };

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <Fragment>
      <div className="w-96 h-full bg-[#3b3b3b] text-white p-4 flex flex-col space-y-4 rounded-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchChange}
            className="w-full bg-[#2b2b2b] p-2 pl-8 rounded-lg"
          />
          {searchInput === '' ? (
            <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
          ) : (
            <X
              onClick={clearSearch}
              className="absolute right-2 top-2.5 h-5 w-5 text-gray-400 cursor-pointer"
            />
          )}
        </div>
        <div className="items-center">
          {chats.map((chat, index) => (
            <ChatListItem
              key={index}
              avatar={chat.avatar}
              name={chat.name}
              message={chat.message}
              time={chat.time}
              isOnline={chat.isOnline}
              onClick={() => handleChatClick(chat)}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-gray-50 rounded-2xl ml-3">
        <FullChatPage chat={selectedChat} />
      </div>
    </Fragment>
  );
};

const ChatListItem = ({ avatar, name, message, time, isOnline, onClick }) => {
  return (
    <div
      className="flex h-[4.5rem] rounded-lg cursor-pointer items-center py-4 px-2 hover:bg-gray-50 hover:text-black"
      onClick={onClick}
    >
      <img
        src={avatar}
        alt="Avatar"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <span className="font-bold">{name}</span>
          <div className="flex items-center space-x-2">
            {isOnline && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
            <span className="text-sm">{time}</span>
          </div>
        </div>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatInterfacePage;

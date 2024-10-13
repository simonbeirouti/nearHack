'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Ellipsis, Plus } from 'lucide-react';

const getIcon = (item) => {
  const icons = {
    Inbox: '📥',
    Starred: '⭐',
    Send: '📤',
    Draft: '📝',
    Spam: '🚫',
    Deleted: '🗑️',
  };
  return icons[item] || '📁';
};

const DynamicSection = ({ title, items, type, activeItem, setActiveItem }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="my-2 flex flex-row items-center justify-between">
        <div className='flex flex-row'>
          <span
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          >
            {isOpen ? <ChevronDown /> : <ChevronRight />}
          </span>
          <span className="ml-2">{title}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-400 cursor-pointer">
            <Plus />
          </span>
          <span className="text-gray-400 ml-2 cursor-pointer">
            <Ellipsis />
          </span>
        </div>
      </div>

      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-1">
              <a
                href="#"
                onClick={() => setActiveItem(item.name)}
                className={`flex cursor-pointer items-center p-2 rounded hover:bg-white hover:bg-opacity-80 hover:text-black ${
                  activeItem === item.name
                    ? 'bg-white bg-opacity-80 text-black'
                    : 'bg-transparent text-white'
                }`}
              >
                {type === 'folder' ? (
                  <span className="mr-3">📁</span>
                ) : (
                  <span className={`w-3 h-3 rounded-full mr-3 ${item.color}`}></span>
                )}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const EmailNavigation = () => {
  const [activeItem, setActiveItem] = useState('Inbox');

  const folders = [{ name: 'Personal' }, { name: 'My Projects' }];

  const labels = [
    { name: 'Work', color: 'bg-red-500' },
    { name: 'Education', color: 'bg-green-500' },
  ];

  return (
    <div className="w-64 h-full bg-[#3b3b3b] text-white p-4 flex flex-col space-y-4 rounded-2xl">
      <div className="flex items-center mb-4">
        <img
          src="/avatar.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="font-semibold">Qojva Salvatoc</h2>
          <p className="text-xs text-gray-400">QojvaSalvatoc@gmail.com</p>
        </div>
      </div>

      <nav className="flex-1">
        <ul>
          {['Inbox', 'Starred', 'Send', 'Draft', 'Spam', 'Deleted'].map(
            (item, index) => (
              <li key={index} className="mb-1">
                <a
                  href="#"
                  onClick={() => setActiveItem(item)}
                  className={`flex cursor-pointer items-center justify-between p-2 rounded hover:bg-white hover:bg-opacity-80 hover:text-black ${
                    activeItem === item ? 'bg-white bg-opacity-80 text-black' : 'bg-transparent text-white'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{getIcon(item)}</span>
                    {item}
                  </div>
                  <p className="text-xs">
                    {['16', '4', '17', '2', '16', '1230'][index]}
                  </p>
                </a>
              </li>
            )
          )}
        </ul>

        <DynamicSection
          title="Folders"
          items={folders}
          type="folder"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        <DynamicSection
          title="Labels"
          items={labels}
          type="label"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </nav>
    </div>
  );
};

export default EmailNavigation;

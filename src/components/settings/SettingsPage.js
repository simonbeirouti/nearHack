'use client'

import React, { Fragment, useState } from 'react';
import {
  User,
  Bell,
  Lock,
  Palette,
  HelpCircle,
  LogOut,
  ChevronRight,
} from 'lucide-react';

const settingsItems = [
  {
    icon: User,
    label: 'Account',
    content: (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    ),
  },
  {
    icon: Bell,
    label: 'Notifications',
    content: (
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Notification Preferences
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <label
              className="relative inline-flex items-center cursor-pointer"
            >
              <input type="checkbox" value="" className="sr-only" />
              <div className="w-11 h-6 bg-gray-200 rounded-full"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <span>Push Notifications</span>
            <label
              className="relative inline-flex items-center cursor-pointer"
            >
              <input type="checkbox" value="" className="sr-only" />
              <div className="w-11 h-6 bg-gray-200 rounded-full"></div>
            </label>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Lock,
    label: 'Privacy and Security',
    content: (
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Privacy and Security Settings
        </h2>
        <div className="space-y-4">
          <button
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-between"
          >
            <span>Change Password</span>
            <ChevronRight size={20} />
          </button>
          <button
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-between"
          >
            <span>Two-Factor Authentication</span>
            <ChevronRight size={20} />
          </button>
          <button
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-between"
          >
            <span>Manage Login Devices</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    ),
  },
  {
    icon: Palette,
    label: 'Appearance',
    content: (
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Appearance Settings
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="theme"
              className="block text-sm font-medium text-gray-700"
            >
              Theme
            </label>
            <select
              id="theme"
              name="theme"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md"
            >
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="font-size"
              className="block text-sm font-medium text-gray-700"
            >
              Font Size
            </label>
            <input
              type="range"
              id="font-size"
              name="font-size"
              min="12"
              max="24"
              className="mt-1 block w-full"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: HelpCircle,
    label: 'Help & Support',
    content: (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Help & Support</h2>
        <div className="space-y-4">
          <button
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-between"
          >
            <span>FAQs</span>
            <ChevronRight size={20} />
          </button>
          <button
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-between"
          >
            <span>Contact Support</span>
            <ChevronRight size={20} />
          </button>
          <button
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-between"
          >
            <span>Report a Bug</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    ),
  },
];

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState(settingsItems[0].label);

  return (
    <Fragment>
      <div className="w-96 h-full text-black bg-[#3b3b3b] p-4 flex flex-col space-y-4 rounded-2xl">
        <header className="p-4">
          <h1 className="text-2xl font-semibold text-white">Settings</h1>
        </header>
        
        <nav className="p-2">
          <ul className="space-y-2">
            {settingsItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveSection(item.label)}
                  className={`flex items-center w-full p-3 rounded-lg hover:bg-white hover:text-black ${activeSection === item.label ? 'bg-gray-100 text-black' : 'text-white'}`}
                >
                  <item.icon className="w-6 h-6 mr-3" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-2 border-t">
          <button className="flex items-center p-3 rounded-lg text-white hover:bg-white hover:text-black w-full">
            <LogOut className="w-6 h-6 mr-3" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-auto bg-gray-50 rounded-2xl ml-3 text-black">
        {settingsItems.find((item) => item.label === activeSection).content}
      </div>
    </Fragment>
  );
};

export default SettingsPage;

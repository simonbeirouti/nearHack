import React from 'react';
import {
  ArrowLeft,
  MoreVertical,
  Star,
  Trash2,
  Reply,
  Forward,
  Paperclip,
  Image,
  Type,
} from 'lucide-react';

const EmailView = () => {
  return (
    <div className="bg-white rounded-r-2xl flex flex-col h-full w-full overflow-auto text-black">
      <header className="p-4 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <button className="mr-4" aria-label="Go back">
            <ArrowLeft size={24} color="#000" />
          </button>
          <div className="flex space-x-2">
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              BWC Bank
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              Payments
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Today, 11:32 AM</span>
          <button
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="Reply"
          >
            <Forward size={20} color="#000" />
          </button>
          <button
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="Star"
          >
            <Star size={20} color="#000" />
          </button>
          <button
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="Delete"
          >
            <Trash2 size={20} color="#000" />
          </button>
          <button
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="More options"
          >
            <MoreVertical size={20} color="#000" />
          </button>
        </div>
      </header>

      <div className="p-4 flex items-center">
        <img
          src="/avatar.png"
          alt="Mateusz Nickarz"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Mateusz Nickarz</h2>
          </div>
          <p className="text-sm text-gray-600">Mateusznickarz@yahoo.com</p>
        </div>
      </div>

      <div className="px-4 py-2">
        <h1 className="text-2xl font-bold">Last Project</h1>
      </div>

      <div className="p-4">
        <p className="mb-4">Hello, Qojva</p>
        {Array(3)
          .fill()
          .map(
            (_, index) => (
              <p key={index} className="mb-4">
                Please send the documents related to the research of our last
                project as soon as possible. These documents are crucial for our
                upcoming presentation, and having them on hand will allow us to
                prepare thoroughly. Additionally, if there are any supplementary
                materials or data that could enhance our understanding of the
                project's outcomes, please include those as well.
              </p>
            )
          )}
        <p>Mateusz Nickarz</p>
      </div>

      <div className="p-4">
        <div className="flex flex-row justify-between items-center mb-2">
          <h3 className="text-lg mb-2">Attachments (3 Files)</h3>
          <span className="text-sm text-blue-600">Receive all</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            'Report product about the thing.pdf',
            'Brand book.pdf',
            'Sitemap.pdf',
          ].map(
            (file, index) => (
              <div
                key={index}
                className="cursor-pointer flex flex-col justify-between bg-gray-100 border border-gray-300 rounded-lg p-2 w-[calc(33.33%-0.5rem)] max-w-[150px]"
              >
                <div className="overflow-hidden mb-1">
                  <p className="text-xs font-medium truncate">{file}</p>
                </div>
                <p className="text-xs text-gray-500">
                  {['68kb', '678kb', '114kb'][index]}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <ReplySection />
    </div>
  );
};

const ReplySection = () => {
  return (
    <div className="p-4">
      <div className="flex items-center bg-gray-100 rounded-lg p-2">
        <button
          className="p-2 hover:bg-gray-200 rounded-full"
          aria-label="Reply"
        >
          <Reply size={20} color="#000" />
        </button>
        <input
          type="text"
          placeholder="Mateusznickarz@yahoo.com"
          className="flex-grow bg-transparent ml-2"
        />
        <button
          className="p-2 hover:bg-gray-200 rounded-full"
          aria-label="Add recipient"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </button>
      </div>

      <div className="mt-2 bg-gray-100 rounded-lg p-4">
        <textarea
          placeholder=""
          className="w-full bg-transparent resize-none"
          rows="4"
        ></textarea>
        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-2">
            <button
              className="p-2 hover:bg-gray-200 rounded-full"
              aria-label="Attach file"
            >
              <Paperclip size={20} color="#000" />
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-full"
              aria-label="Insert image"
            >
              <Image size={20} color="#000" />
            </button>
            <button
              className="p-2 hover:bg-gray-200 rounded-full"
              aria-label="Formatting options"
            >
              <Type size={20} color="#000" />
            </button>
          </div>
          <button
            className="bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailView;

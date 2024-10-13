import React from 'react';
import {
  Search,
  ChevronDown,
  RefreshCcw,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Star,
  Paperclip,
  Edit,
} from 'lucide-react';

const emails = [
  {
    id: 1,
    sender: { name: 'Jessica Brown', avatar: '/avatar.png' },
    subject: 'Usability Test Results',
    preview:
      'Hello Qojva, in the latest test conducted on the profile pages of...',
    time: 'Today, 11:32 AM',
    labels: ['Applications', 'work'],
    starred: false,
    attachments: [],
  },
  {
    id: 2,
    sender: { name: 'Mateusz Nickarz', avatar: '/avatar.png' },
    subject: 'About Lastes Project',
    preview:
      'Please send the documents related to the research of our last project...',
    time: 'Today, 09:14 AM',
    labels: ['BWC Bank', 'Payments'],
    starred: true,
    attachments: [
      { name: 'Report product about the thing.pdf', size: '68kb' },
      { name: 'Brand book.pdf', size: '678kb' },
      { name: 'Sitemap.pdf', size: '114kb' },
    ],
  },
  {
    id: 3,
    sender: { name: 'Grace Jackson', avatar: '/avatar.png' },
    subject: 'Inquiry work redesign app',
    preview:
      'My former co-worker, Milora agenyc, suggested that I write to you to...',
    time: 'Yesterday, 06:58 PM',
    labels: [],
    starred: false,
    attachments: [
      { name: 'Report product about the thing.pdf', size: '68kb' },
      { name: 'Brand book.pdf', size: '678kb' },
    ],
  },
  {
    id: 4,
    sender: { name: 'Oliver Miller', avatar: '/avatar.png' },
    subject: 'Restoring Previous Versions',
    preview:
      'remembers any changes you make to your files for 30 days, allowing you...',
    time: '18 Jul, 07:48 AM',
    labels: ['Education', 'Personal'],
    starred: false,
    attachments: [],
  },
];

const EmailList = () => {
  return (
    <div className="bg-white rounded-l-2xl flex flex-col h-full w-[28rem] border-r border-gray-300 flex-1 ml-2">
      <div className="p-4 border-b flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl text-black font-semibold">Inbox</h1>
          <div className="text-sm text-gray-500 mt-1">1112 Messages</div>
        </div>
        <div className="justify-end">
          <button
            className="bg-yellow-400 text-white px-4 py-2 rounded-full shadow-lg hover:bg-yellow-500 flex items-center"
            aria-label="Compose new email"
          >
            <Edit size={18} className="mr-2" />
            Compose
          </button>
        </div>
      </div>

      <div className="p-4 border-b">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <ChevronDown size={18} className="text-gray-500" />
          </div>
          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <RefreshCcw size={18} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft size={18} className="text-gray-500" />
            </button>
            <span className="mx-2 text-sm text-gray-500">1 of 223</span>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronRight size={18} className="text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreVertical size={18} className="text-gray-500" />
            </button>
          </div>
        </div>

        {emails.map((email) => (
          <div
            key={email.id}
            className="flex text-black items-start p-4 hover:bg-gray-50 border-b"
          >
            <input type="checkbox" className="mt-1 mr-4" />
            <img
              src={email.sender.avatar}
              alt={email.sender.name}
              className="w-10 h-10 rounded-full mr-4"
            />

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-sm">
                  {email.sender.name}
                </h3>
                <span className="text-xs text-gray-500">{email.time}</span>
              </div>

              <div className="mb-1">
                <p className="font-medium text-sm">{email.subject}</p>
                <p className="text-sm text-gray-500 truncate">
                  {email.preview}
                </p>
              </div>

              <div className="flex items-center">
                {email.attachments.length > 0 && (
                  <div className="flex overflow-x-auto">
                    {email.attachments.slice(0, 1).map((attachment, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-200 rounded px-2 py-1 mr-2 whitespace-nowrap"
                      >
                        {attachment.name}
                      </span>
                    ))}
                    {email.attachments.length > 1 && (
                      <span className="text-xs bg-gray-200 rounded px-2 py-1 mr-2 whitespace-nowrap">
                        +{email.attachments.length - 1}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailList;

{
  /* 
    
<div className="mt-1 flex items-center">
    {email.labels.map(label => (
        <span key={label} className={`text-xs px-2 py-1 rounded-full mr-2 ${getLabelColor(label)}`}>{label}</span>
    ))}
</div>

function getLabelColor(label) {
  const colors = {
    'Applications': 'bg-blue-100 text-blue-800',
    'work': 'bg-red-100 text-red-800',
    'BWC Bank': 'bg-purple-100 text-purple-800',
    'Payments': 'bg-green-100 text-green-800',
    'Education': 'bg-indigo-100 text-indigo-800',
    'Personal': 'bg-pink-100 text-pink-800'
  }
  return colors[label] || 'bg-gray-100 text-gray-800'
}
  
<button className={`p-1 hover:bg-gray-100 rounded-full ${email.starred ? 'text-yellow-400' : 'text-gray-400'}`}>
    <Star size={18} />
</button> */
}

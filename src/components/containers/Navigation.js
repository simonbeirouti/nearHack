'use client'

import React, { useState} from 'react';
import {
  Plus,
  CircleHelp,
  Settings,
  Mail,
  MessageCircle,
  Key,
  Server,
  User,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import iconWhite from '../../../public/icon_white.png';


export default function Navigation() {
  return (
    <div className="w-[72px] h-full flex flex-col pt-3 -ml-0.5 items-center">
      <div className="flex flex-col items-start">
        <IconWrapper link="#">
          <Image src={iconWhite} alt="Icon" width={40} height={40} />
        </IconWrapper>
        <IconWrapper link="/chats">
          <Key />
        </IconWrapper>
        <IconWrapper link="/storage">
          <Server />
        </IconWrapper>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 mt-1 mb-1 py-3.5 border-t border-b border-dashed border-white overflow-y-auto h-auto">
        {Array(6)
          .fill()
          .map((_, index) => (
            <Link key={index} href="/chats/user">
              <Avatar
                key={index} />
            </Link>
          ))}
        <div className="cursor-pointer w-10 h-10 min-h-[2.5rem] border-2 border-dashed border-white rounded-full flex items-center justify-center flex-shrink-0" style={{ color: '#fff' }}>
          <Plus />
        </div>
      </div>
      <div className="mt-3 -mb-3 flex flex-col items-end">
        <IconWrapper link="/settings">
          <Settings />
        </IconWrapper>
      </div>
    </div>
  );
}

const Avatar = ({ imageUrl = '/avatar.png' }) => {
  return (
    <div className="flex cursor-pointer justify-center w-full">
      <div className="relative">
        <div
          className="w-10 h-10 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
      </div>
    </div>
  );
};

const IconWrapper = ({ children, link }) => {
  return (
    <div className="relative">
      <Link
        className="w-12 h-12 bg-[#3b3b3b] cursor-pointer rounded-xl flex items-center justify-center mb-3"
        style={{ color: '#fff' }}
        href={link}
      >
        {children}
      </Link>
    </div>
  );
};

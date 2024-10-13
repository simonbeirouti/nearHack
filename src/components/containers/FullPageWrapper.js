import React from 'react';

export default function FullPageWrapper({ children }) {
  return (
    <div
      className="flex-1 flex w-full rounded-2xl overflow-hidden h-full"
    >
      {children}
    </div>
  );
}

'use client'

import React, { useState, useEffect } from 'react';

const SizeChecker = () => {
  const [screenSize, setScreenSize] = useState('');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setDimensions({ width, height });

      if (width < 640) {
        setScreenSize('xs');
      } else if (width >= 640 && width < 768) {
        setScreenSize('sm');
      } else if (width >= 768 && width < 1024) {
        setScreenSize('md');
      } else if (width >= 1024 && width < 1280) {
        setScreenSize('lg');
      } else if (width >= 1280 && width < 1536) {
        setScreenSize('xl');
      } else {
        setScreenSize('2xl');
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
      <p>{screenSize}</p>
      <p>{dimensions.width}px x {dimensions.height}px</p>
    </div>
  );
};

export default SizeChecker;

import React from 'react';

const Footer = () => {
  return (
    <footer className="relative flex items-center text-gray-400">
      <div className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <div className="flex justify-center items-center lg:justify-between">
          <span>© 2023 Design by - Filip Jarek</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

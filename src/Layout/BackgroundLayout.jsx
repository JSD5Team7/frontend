import React from 'react';

const BackgroundLayout = ({ children }) => {
  return (
    <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 h-fit'>
      <div className="container mx-auto px-4 ">
        {children}
      </div>
    </div>
  );
}

export default BackgroundLayout;
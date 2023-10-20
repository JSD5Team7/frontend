import React from 'react';

const BackgroundLayout = ({ children }) => {
  return (
    <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-300 via-emerald-500 to-blue-500 max-h-fit min-h-screen'>
      <div className="container mx-auto px-4 ">
        {children}
      </div>
    </div>
  );
}

export default BackgroundLayout;
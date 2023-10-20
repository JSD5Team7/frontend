import React from 'react';


const BackgroundLayout = ({ children }) => {
  return (
    <div className='bg-slate-100 max-h-fit min-h-screen'>
      <div className="container mx-auto px-4 ">
        {children}
      </div>
    </div>
  );
}

export default BackgroundLayout;
import React from 'react';

// import Header from './Header';
import ColorList from 'app/pages/color/ColorList';

const Layout = () => {
  return (
    <div className='container py-5 h-100 d-flex align-items-center'>
      {/* <Header /> */}
      <ColorList />
    </div>
  );
};

export default Layout;

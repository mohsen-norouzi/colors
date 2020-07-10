import React from 'react';

import Header from './Header';
import ColorList from 'app/pages/color/ColorList';

const Layout = () => {
  return (
    <div className='container-fullwidth'>
      <Header />
      <ColorList />
    </div>
  );
};

export default Layout;

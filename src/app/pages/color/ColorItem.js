import React from 'react';
import _ from 'lodash';

const ColorItem = (props) => {
  const { color } = props;

  return (
    <div className='color-item d-flex'>
      <div className='color-box' style={{ background: color }}></div>
      <small className='color-title'>{_.startCase(color)}</small>
    </div>
  );
};

export default ColorItem;

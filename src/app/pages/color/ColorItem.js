import React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';

import _ from 'lodash';

const ColorItem = (props) => {
  const { color, bold } = props;

  return (
    <div className='color-item d-flex'>
      <div className='color-box' style={{ background: color }}></div>
      <small className='color-title'>
        <Highlighter
          highlightClassName='strong pr-0'
          searchWords={[bold]}
          highlightStyle={{ background: 'unset' }}
          textToHighlight={color}
        />
      </small>
    </div>
  );
};

ColorItem.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorItem;

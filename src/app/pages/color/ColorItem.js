import React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';

const ColorItem = (props) => {
  const { color, bold, index, onClick } = props;

  return (
    <div
      className='color-item d-flex'
      tabIndex={index + 2}
      onClick={() => onClick(color, false)}
    >
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

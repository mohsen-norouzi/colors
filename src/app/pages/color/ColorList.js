import React, { useEffect, useState, useRef } from 'react';

import ColorItem from './ColorItem';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from 'app/store/actions';
import { FuseAnimate } from '@fuse';

import OutsideClickHandler from 'react-outside-click-handler';

const ColorList = (props) => {
  const dispatch = useDispatch();

  let textInput = useRef();

  const colors = useSelector(({ color }) => color.entities);
  const loading = useSelector(({ color }) => color.loading);

  const [text, setText] = useState('');
  const [filteredColors, setFilteredColors] = useState([]);

  useEffect(() => {
    dispatch(Actions.getColors());
  }, [dispatch]);

  const _onTextChange = (event) => {
    const searchKey = event.target.value;
    setText(searchKey);
    updateColors(searchKey);
  };

  const _onSelect = (color) => {
    setText(color);
    updateColors(color);
  };

  const updateColors = (searchKey) => {
    if (searchKey.trim().length) {
      const updatedColors = colors.filter((c) => c.includes(searchKey));
      setFilteredColors(updatedColors);
    } else {
      setFilteredColors([]);
    }
  };

  const _handleKeyDown = (e, color) => {
    if (e.key === 'Enter') {
      _onSelect(color);
      textInput.current.focus();
    }
  };

  const _handleClickOutside = () => {
    setText('');
    setFilteredColors([]);
  };

  return (
    <div className='row'>
      <FuseAnimate animation='transition.fadeIn' duration='1000'>
        <div className='w-100 text-center'>
          <h1>The Colors</h1>

          <hr className='my-3' />
        </div>
      </FuseAnimate>

      {loading ? (
        <FuseAnimate animation='transition.fadeIn' duration='1000'>
          <div className='spinner'></div>
        </FuseAnimate>
      ) : (
        <FuseAnimate animation='transition.fadeIn' duration='1000'>
          <div className='col-sm-6 col-md-3 col-lg-3 col-xl-3 mx-auto mb-5'>
            <OutsideClickHandler onOutsideClick={_handleClickOutside}>
              <input
                ref={textInput}
                className='form-control text-center'
                type='text'
                placeholder='search'
                onChange={_onTextChange}
                value={text}
                tabIndex={1}
              />
            </OutsideClickHandler>
          </div>
        </FuseAnimate>
      )}

      <div className='colors'>
        {filteredColors.length
          ? filteredColors.map((color, index) => (
              <FuseAnimate
                key={index}
                animation='transition.slideUpIn'
                delay={index * 10}
              >
                <div
                  className='col-sm-6 col-md-4 col-lg-3 col-xl-2 p-2'
                  onKeyDown={(e) => _handleKeyDown(e, color)}
                >
                  <OutsideClickHandler onOutsideClick={_handleClickOutside}>
                    <ColorItem
                      color={color}
                      bold={text}
                      index={index}
                      onClick={() => _onSelect(color)}
                    />
                  </OutsideClickHandler>
                </div>
              </FuseAnimate>
            ))
          : !loading && (
              <FuseAnimate animation='transition.fadeIn'>
                <p>
                  {text.trim() !== ''
                    ? 'color not found : ('
                    : 'type to search in colors'}
                </p>
              </FuseAnimate>
            )}
      </div>
    </div>
  );
};

export default ColorList;

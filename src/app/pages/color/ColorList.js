import React, { useEffect, useState } from 'react';

import ColorItem from './ColorItem';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from 'app/store/actions';
import { FuseAnimate } from '@fuse';

const ColorList = (props) => {
  const dispatch = useDispatch();

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

    if (searchKey.trim().length) {
      const updatedColors = colors.filter((c) => c.includes(searchKey));
      setFilteredColors(updatedColors);
    } else {
      setFilteredColors([]);
    }
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
            <input
              className='form-control text-center'
              type='text'
              placeholder='search'
              onChange={_onTextChange}
              value={text}
            />
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
                <div className='col-sm-6 col-md-4 col-lg-3 col-xl-2 p-2'>
                  <ColorItem color={color} bold={text} />
                </div>
              </FuseAnimate>
            ))
          : !loading &&
            (text.trim() !== '' ? (
              <FuseAnimate animation='transition.fadeIn'>
                <p>no colors found</p>
              </FuseAnimate>
            ) : (
              <FuseAnimate animation='transition.fadeIn'>
                <p>type to search colors</p>
              </FuseAnimate>
            ))}
      </div>
    </div>
  );
};

export default ColorList;

import React, { useEffect } from 'react';

import ColorItem from './ColorItem';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from 'app/store/actions';
import { FuseAnimateGroup } from '@fuse';

const ColorList = (props) => {
  const dispatch = useDispatch();
  const colors = useSelector(({ color }) => color.entities);

  useEffect(() => {
    dispatch(Actions.getColors());
  }, [dispatch]);

  console.log(colors.length);

  return (
    <FuseAnimateGroup
      className='colors'
      enter={{
        animation: 'transition.slideRightIn',
        duration: '700',
        stagger: 10
      }}
    >
      {colors.map((color, index) => (
        <div className='col-2 p-2' key={index}>
          <ColorItem color={color} />
        </div>
      ))}
    </FuseAnimateGroup>
  );
};

export default ColorList;

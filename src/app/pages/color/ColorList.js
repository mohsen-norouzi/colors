import React, { useEffect } from 'react';

import ColorItem from './ColorItem';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from 'app/store/actions';
import { FuseAnimateGroup, FuseAnimate } from '@fuse';

const ColorList = (props) => {
  const dispatch = useDispatch();

  const colors = useSelector(({ color }) => color.entities);
  const loading = useSelector(({ color }) => color.loading);

  useEffect(() => {
    dispatch(Actions.getColors());
  }, [dispatch]);

  return (
    <div className='colors'>
      <FuseAnimate animation='transition.fadeIn' duration='1000'>
        <div className='w-100 text-center'>
          <h1>Les Couleurs</h1>

          <hr className='my-3' />
        </div>
      </FuseAnimate>

      {loading && (
        <FuseAnimate animation='transition.fadeIn' duration='1000'>
          <div class='spinner'></div>
        </FuseAnimate>
      )}

      {colors.map((color, index) => (
        <FuseAnimate animation='transition.slideRightIn' delay={index * 10}>
          <div className='col-2 p-2' key={index}>
            <ColorItem color={color} />
          </div>
        </FuseAnimate>
      ))}
    </div>
  );
};

export default ColorList;

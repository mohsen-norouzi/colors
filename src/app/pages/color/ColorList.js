import React, { useEffect } from 'react';

import ColorItem from './ColorItem';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from 'app/store/actions';
import { FuseAnimate } from '@fuse';

const ColorList = (props) => {
  const dispatch = useDispatch();

  const colors = useSelector(({ color }) => color.entities);
  const loading = useSelector(({ color }) => color.loading);

  useEffect(() => {
    dispatch(Actions.getColors());
  }, [dispatch]);

  return (
    <div className='colors'>
      <FuseAnimate animation='transition.fadeIn' duration='1000' >
        <div className='w-100 text-center'>
          <h1>Les Couleurs</h1>

          <hr className='my-3' />
        </div>
      </FuseAnimate>

      {loading && (
        <FuseAnimate animation='transition.fadeIn' duration='1000'>
          <div className='spinner'></div>
        </FuseAnimate>
      )}

      {colors.map((color, index) => (
        <FuseAnimate
          key={index}
          animation='transition.slideUpIn'
          delay={index * 10}
          ref={null}
        >
          <div className='col-sm-6 col-md-4 col-lg3 col-xl-2 p-2'>
            <ColorItem color={color} />
          </div>
        </FuseAnimate>
      ))}
    </div>
  );
};

export default ColorList;

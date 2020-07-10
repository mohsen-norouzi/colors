import React, { useEffect } from 'react';

import ColorItem from './ColorItem';
import { useDispatch } from 'react-redux';

import * as Actions from 'app/store/actions';

const ColorList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.getColors());
  }, [dispatch]);

  return (
    <div>
      <h1>Color List</h1>
      <ColorItem />
    </div>
  );
};

export default ColorList;

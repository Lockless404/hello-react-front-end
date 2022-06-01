import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchgreeting } from '../redux/Greeting/greeting';

const Greeting = () => {
  const message = useSelector((state) => state.greetingReducer.message);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchgreeting());
  };

  return (
    <div className="wrapper">
      <h1>Greeting</h1>
      <div className="message">
        Message:
        {' '}
        {message}
      </div>
      <button type="button" onClick={handleClick}>GREETING</button>
    </div>
  );
};

export default Greeting;

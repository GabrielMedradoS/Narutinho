import React from 'react';
import P from 'prop-types';
import './button.css';

export const Button = ({ children, onUpdate }) => {
  return (
    <button onClick={onUpdate} className="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.string,
  onUpdate: P.func,
};

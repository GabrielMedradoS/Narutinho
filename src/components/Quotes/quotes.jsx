/* eslint-disable no-unreachable */
import React from 'react';
import P from 'prop-types';
import { Button } from '../Button/button.jsx';

export const Quotes = ({ quote, speaker, onUpdate }) => {
  return (
    <div className="boxQuote">
      <p className="quote">{quote}</p>
      <p className="speaker">- {speaker}</p>
      <Button onClick={onUpdate}>Quote No Jutsu</Button>
    </div>
  );
};

Quotes.propTypes = {
  quote: P.string,
  speaker: P.string,
  onUpdate: P.func,
};

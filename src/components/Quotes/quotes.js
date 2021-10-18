/* eslint-disable no-unreachable */
import React from 'react'
import P from 'prop-types';

export const Quotes = ({ quote, speaker }) => {
    return (
        <div className='boxQuote'>
            <p className='quote'>{quote}</p>
            <p className='speaker'>- {speaker}</p>
            <button className='button'>Quote</button>
        </div>
    )
}

Quotes.propTypes = {
    quote: P.string,
    speaker: P.string,
};

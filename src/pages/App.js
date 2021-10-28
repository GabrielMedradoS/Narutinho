import narutoImg from '../assets/images/naruto.png';
import { Quotes } from '../components/Quotes/quotes.jsx';
import React, { useState } from 'react';
/* import { getQuote } from '../src/services/quoteServices'; */
import jutsoSound from '../assets/sound/jutso.mp3';

export function App() {
  const [quote, setQuoteState] = useState({
    quote:
      '"Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain because lifes greatest lessons are learned through pain."',
    speaker: 'Naruto Uzumaki',
  });

  const onUpdate = () => {
    const audio = new Audio(jutsoSound);
    audio.play();

    setQuoteState(quote);
  };

  return (
    <div className="App">
      <Quotes {...quote} onUpdate={onUpdate} />
      <img className="narutoImg" src={narutoImg} alt="narutinho" />
    </div>
  );
}

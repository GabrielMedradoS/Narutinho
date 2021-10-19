import narutoImg from './assets/images/naruto.png';
import { Quotes } from './components/Quotes/quotes.jsx';
import React, { useState } from 'react';
import { getQuote } from '../src/services/quoteServices';

function App() {
  const [quoteState, setQuoteState] = useState({ quote: 'ok', speaker: 'Speaker' });

  const onUpdate = async () => {
    const quote = await getQuote();

    setQuoteState(quote);
  };

  return (
    <div className="App">
      <img className="narutoImg" src={narutoImg} alt="narutinho" />
      <Quotes quote={quoteState.quote} speaker={quoteState.speaker} onUpdate={onUpdate} />
    </div>
  );
}

export default App;

import narutoImg from './assets/images/naruto.png'
import { Quotes } from './components/Quotes/quotes';
import React from 'react';

function App() {
  return (
    <div className="App">
      <img className='narutoImg' src={narutoImg} alt='narutinho' />
      <Quotes quote={'ok'} speaker={'Speaker'} />
    </div>
  );
}

export default App;

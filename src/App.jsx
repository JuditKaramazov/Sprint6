import React, { useState } from 'react';
import Scene from './components/scene/Scene';
import { Button, ButtonWrapper, SwitchImages } from './styled';
import { quotes as quote, quotes } from './components/Quotes'
import WelcomeScreen from './components/Welcome';

function App() {
  const [introMessage, setIntroMessage] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);

  function GoBack() {
    if (quoteIndex > 0) setQuoteIndex (quoteIndex - 1);
  }

  function GoNext() {
    if (quoteIndex < 3) setQuoteIndex (quoteIndex + 1);
  }

  function goMainSite() {
    setIntroMessage(false);
  }

  return introMessage === true ? (
    <WelcomeScreen Start={goMainSite} />
  ) : (
    <SwitchImages background={quote[quoteIndex].img}>
      <ButtonWrapper>
        <Button onClick={() => GoBack(-1)}>Previous</Button>
        <Button onClick={() => GoNext(+1)}>Next</Button>
      </ButtonWrapper>
      {quotes.map((quote) => (
      <Scene 
      id={quote.id}
      key={quote.id}
      singleQuote={quote.txt}
      quoteIndex={quoteIndex}/>
      ))}
      </SwitchImages>
  );
}

export default App;
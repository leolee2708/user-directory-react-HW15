import React from 'react';
import Main from './src/components/main';
import Wrapper from './src/components/Wrapper';
import Header from './src/components/Header';
import "./App.css";

function App() {
  return (
    <div className="App">
   <Wrapper>
     <Header />
     <Main />
   </Wrapper>
    </div>
  );
}

export default App;
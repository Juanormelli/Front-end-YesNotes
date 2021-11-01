import React from 'react';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';
import { GlobalStyle } from './styles/global';
import { Body } from './styles/body';


function App() {
  return (
    <>

      <GlobalStyle />
      <Body>
        <Sidebar />
        <Content />
        </Body>
    </>
  );
}

export default App;

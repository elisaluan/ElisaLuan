import React, { useState, useEffect } from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll'
// import styled from 'styled-components';

import Header from './components/organisms/header';
import GlobalStyles from './components/molecules/global-styles';
import Sticky, { useControlledSticky } from './components/molecules/sticky';

function App() {
  const [isSmallWindow, setSmallWindow] = useState(true);
  const useSticky = useControlledSticky();

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setSmallWindow(true);
    } else {
      setSmallWindow(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <GlobalStyles/>
      <Sticky isBurger={isSmallWindow} {...useSticky}/>  
      <Header/>  
    </>
  );
}

export default App;

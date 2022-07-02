import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import Coins from './Components/Coins';
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from './Components/ThemeToggle'

// const StyledApp = styled.div`
// `;

function App() {

    const [coins, setCoins] = useState([])
    // const [theme, setTheme] = useState("dark");

    // const themeToggler = () => {
    //   theme === "light" ? setTheme("dark") : setTheme("light");
    // };

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    useEffect(() => {
      axios.get(url).then((response) => {
        setCoins(response.data)
        console.log(response.data[0]) 
      }).catch((error) => {
        console.log(error)
      })
    }, [])

    return (
    <>
      <Navbar />
      <Coins coins={coins} />
    </>
      
    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    //   <GlobalStyles />
    //   <StyledApp>
    //     Hello World
    //     <button onClick={() => themeToggler()}>Change Theme</button>
    //   </StyledApp>
    // </ThemeProvider>
  );
}

export default App;

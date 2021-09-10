import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import TableCoins from './components/tablecoins';


function App() {
  
  const [coins, setCoins] = useState([])

  const getData = async () =>{
    const answer = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    console.log(answer.data)
    setCoins(answer.data)
  } 

  useEffect(()=>{
    getData()
  }, [])
  
  return (
    <div className="App" class="dark ">
      <div class="bg-white dark:bg-black ">
      <h1 class ="text-center">Coin Geko</h1>
        <TableCoins coins={coins}/>
      </div>
      </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import TableCoins from "./components/tablecoins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const answer = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    console.log(answer.data);
    setCoins(answer.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App dark">
      <div className="bg-white dark:bg-black dark:text-white ">
        <div className="p-5">
          <input
            type="text"
            className="bg-white dark:bg-gray-600 dark:text-white mx-0 min-w-full rounded p-1 my-3 "
            placeholder="Search a Coin"
            onChange = {e => setSearch(e.target.value)}
          />
          <TableCoins coins={coins}  search ={search} />
        </div>
      </div>
    </div>
  );
}

export default App;

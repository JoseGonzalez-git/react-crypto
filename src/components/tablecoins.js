import React from "react";
import Coinrow from "./coinrow";
const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];

const TableCoins = ({ coins, search }) => {
  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="w-full text-rigth  border-separate ">
      <thead className="border ">
        <tr>
          {titles.map((title , index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterCoins.map((coin, index) => (
          <Coinrow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;

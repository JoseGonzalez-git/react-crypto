import React from "react";
import Coinrow from "./coinrow";
const titles = ["#", "Coin", "Price", "Price Change", "24h Volume"];

const TableCoins = ({ coins }) => {
  return (
    <table className="w-full text-rigth  border-separate ">
      <thead className="border ">
        <tr>
          {titles.map((title) => (
            <td>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <Coinrow coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;

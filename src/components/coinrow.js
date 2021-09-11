import React from "react";

const Coinrow = ({ coin, index }) => {
  return (
    <tr className=" hover:bg-gray-900 rounded-sm">
      <td >{index}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          style={{ maxWidth: "3%" }}
          className="inline-block mx-3"
        />
        <span>{coin.name}</span>
        <span className="mx-3 text-gray-600 uppercase">{coin.symbol}</span>
      </td>
      <td>{coin.current_price}</td>
      <td className={coin.price_change_percentage_24h >0 ? 'text-green-700': 'text-red-700'}>
          {coin.price_change_percentage_24h}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default Coinrow;

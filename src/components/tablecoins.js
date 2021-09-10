import React from "react";

const TableCoins = ({coins}) => {
    return (
        
        <table class = "w-full text-rigth">
            <thead>
                <tr>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                {coins.map(
                    coin => (
                        <tr>{coin.name}</tr>
                    )
                )}
            </tbody>
        </table>

    )
};

export default TableCoins;

import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoins, setAllCoins] = useState([]);
    const [curr, setCurrency] = useState({
        name: "INR",
        symbol: "₹"
    });

    useEffect(() => {
        fetchCoinData();
    }, [curr]) // when use changed website curr type we have to fetch new data

    const fetchCoinData = async ()=> {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-R1ZCiD8mEguoazZLfBJTs8k6'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoins(response))
            .catch(err => console.error(err));
    }

    const contextValue = {
        allCoins, curr, setCurrency
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;
import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../../context/CoinContext';
import './Home.css';

export default function Home() {
  const { allCoins, curr } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);

  return (
    <div className='py-0 px-[10px] pb-[100px]'>
      {/* Hero section */}
      <div className='flex max-w-[600px] my-[80px] mx-auto flex-col items-center text-center gap-[30px]'>
        <h1 className='font-bold text-[70px]'>Largest Crypto <br /> Market Place</h1>
        <p className='w-[75%] text-[#e3e3e3] leading-[1.5]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, inventore?</p>
        <form className='flex p-[8px] w-[80%] bg-white rounded-[5px] text-[20px] justify-between items-center gap-[10px]'>
          <input className='flex-1 text-[16px] outline-none border-none pl-[10px] text-[#da6088]' type="text" placeholder='Search Crypto'/>
          <button className='border-none bg-[#da6088] w-auto text-white text-[16px] py-[10px] px-[30px] rounded-[5px] cursor-pointer' type="submit">Search</button>
        </form>
      </div>

      {/* Table Section */}
      <div className='myTableWrapper max-w-[800px] m-auto bg-[#e05080] rounded-[10px] overflow-x-auto'>
  <div className='overflow-x-auto'>
    <div className='min-w-[600px] grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-[15px] px-[20px] text-center border-b-[#3c3c3c] border-b-[2px]'>
      <p>#</p> {/* Market Cap Rank*/}
      <p>Coins</p>
      <p>Price</p>
      <p className='text-center'>24H Change</p>
      <p className='market-cap'>Market Cap</p>
    </div>

    {displayCoin.slice(0, 10).map((item, ind) => (
      <div key={ind} className='min-w-[600px] grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-[15px] px-[20px] text-center border-b-[#3c3c3c] border-b-[2px]'>
        <p>{item.market_cap_rank}</p>
        <div className='flex gap-2 items-center justify-center'>
          <img src={item.image} alt={`${item.name} Coin`} className='size-8'/>
          <span>{item.name}</span>
        </div>
        <p>{curr.symbol + " " + item.current_price}</p>
        <p className={`${item.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'} bg-slate-600`}>
          {(!Number.isInteger(item.price_change_24h)) ? item.price_change_24h.toFixed(4) : item.price_change_24h}
        </p>
        <p className='market-cap'>{curr.symbol + " " + item.market_cap}</p>
      </div>
    ))}
  </div>
</div>


    </div>
  );
}

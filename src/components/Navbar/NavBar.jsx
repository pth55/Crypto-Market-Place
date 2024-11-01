import React, { useContext } from 'react'
import logo from "../../assets/logo.png"
import { CoinContext } from '../../context/CoinContext'

export default function NavBar() {
    const { setCurrency } = useContext(CoinContext);

    const currHandler = (event) => {
        switch(event.target.value) {
            case "INR": {
                setCurrency({
                    name: "INR",
                    symbol: "₹"
                });
                break;
            }

            case "USD": {
                setCurrency({
                    name: "USD",
                    symbol: "$"
                });
                break;
            }

            case "EUR": {
                setCurrency({
                    name: "EUR",
                    symbol: "€"
                });
                break;
            }

            default : {
                setCurrency({
                    name: "INR",
                    symbol: "₹"
                });
                break;
            }
        }
    }

    return (
        <div className="flex items-center justify-between py-5 px-8 md:py-5 md:px-10 lg:px-[10%] text-[#ddd] border-2 border-[#3c3c3c]">
            <img src={logo} alt="NOT FOUND" className='w-[30%] max-w-[200px] md:w-[12vw]' />
            <ul className='hidden md:flex gap-[40px] list-none text-xl text-white'>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="flex items-center gap-4">
                <select className='py-2 px-3 rounded text-white border-2 border-white bg-transparent text-lg md:text-xl md:bg-inherit-500' onChange={currHandler}>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <button className='flex items-center gap-2 py-2 px-4 rounded text-[15px] md:py-[10px] md:px-[25px] text-[#da6088] bg-white border-none cursor-pointer'>
                    Sign Up
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

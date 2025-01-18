import React from "react";
import { useState, useEffect } from "react";

import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import {useNavigate} from "react-router-dom"

const Prices = ({setFilteredCrypto , setId}) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [storedData , setStoredData] = useState([])
  const [watchlist, setWatchlist] = useState(() => {
    const bitcoinData = localStorage.getItem("bitcoinData")
    return bitcoinData ? JSON.parse(bitcoinData) : []
  });
  useEffect(() => {
    localStorage.setItem("bitcoinData" , JSON.stringify(watchlist))
  } ,[watchlist])


  const [openWatchlist, setOpenWatchlist] = useState(false);

  const navigate = useNavigate();

  async function fetchData() {
    try {
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-DxNWbMiJ9vwHu5TMtcqoJdQH'}
      };
      
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
      const data = await response.json()
        
        setCryptoData(data)
        setStoredData(data)
      
    } catch (err) {
      console.error(err);
    }
  }

 
  useEffect(() => {
  
    fetchData();
  }, []);


  function addToWatchlist(e, name, price, image) {
    e.stopPropagation()
    console.log(price)
    setWatchlist((prev) => {
      if (!prev.some((item) => item.cryptoName === name)) {
        return [
          ...prev,
          {
            id: Math.random(),
            price: price,
            cryptoName: name,
            logo: image,
          },
        ];
      }

      return prev;
    });
  }

function handleChange(cryptoName){
  const filteredCrypto = storedData.filter(crypto => crypto.name.trim().toLowerCase().includes(cryptoName.trim().toLowerCase()));
  setCryptoData(filteredCrypto)
}
function deleteCrypto(id){
  const filteredWatchlist = watchlist.filter(crypto => crypto.id !== id);
  setWatchlist(filteredWatchlist)
}


function getCryptoById(id){
  const filteredCrypto = cryptoData.filter(crypto => crypto.id === id);
  setFilteredCrypto(filteredCrypto);
  setId(id)
  navigate(`/crypto-prices/prices/${id}`)
}

  return (
    <div>
      <h1>Live Crypto Prices</h1>
      <input
      
      className="search-crypto-input"
        type="text"
        placeholder="Search crypto"
        onChange={(e) => handleChange(e.target.value)}
      />

      <div className="container">
        <div className="specialDiv">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H change</p>
          <p>Market Cap</p>
          <p>Watchlist</p>
        </div>
        <hr style={{ borderColor: 'black', borderWidth: '2px',margin: "0px" }} />
        {cryptoData.map((crypto, index) => (
          <>
              <div key={index} onClick={() => getCryptoById(crypto.id)}>
          <p>{crypto.market_cap_rank}</p>
          <p> <img src={crypto.image} alt="" />{crypto.name}</p>
          <p>$ {crypto.current_price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 5 })}</p>

          <p className={crypto.price_change_24h > 0 ? "green" : "red"}>{crypto.price_change_24h.toFixed(2) == "0.00" || crypto.price_change_24h.toFixed(2) == -0.00 ? crypto.price_change_24h.toFixed(6) :  crypto.price_change_24h.toFixed(2).toLocaleString()}</p>
          <p>$ {crypto.market_cap.toLocaleString()}</p>
          <button onClick={(e) => addToWatchlist(e, crypto.name , crypto.current_price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 5 }) , crypto.image)}>Add to watchlist</button>
          </div>
          <hr style={{ borderColor: 'black', borderWidth: '2px',margin: "0px" }} />

          </>
      
        ))}
      </div>

      <div className={openWatchlist ? "watchlist open" : "watchlist"}>
        <p className="icon">
          {!openWatchlist ? "Show" : "Close"} watchlist{" "}
          {openWatchlist ? (
            <IoIosArrowDropup
              onClick={() => setOpenWatchlist((prev) => !prev)}
            />
          ) : (
            <IoIosArrowDropdown
              onClick={() => setOpenWatchlist((prev) => !prev)}
            />
          )}
        </p>
        {watchlist.length > 0 ? (
          watchlist.map((item, index) => (
            <p key={index}>
              {" "}
              <img className="logo" src={item.logo} alt="" />
              {item.cryptoName} - ${item.price}
              <TiDelete onClick={() => deleteCrypto(item.id)} />
            </p>
          ))
        ) : (
          <p>No crypto added to the watchlist</p>
        )}
      </div>
    </div>
  );
};

export default Prices;

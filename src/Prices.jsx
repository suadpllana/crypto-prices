import React from "react";
import { useState, useEffect } from "react";
import { images } from "./images";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { TiDelete } from "react-icons/ti";


const Prices = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    const bitcoinData = localStorage.getItem("bitcoinData")
    return bitcoinData ? JSON.parse(bitcoinData) : []
  });
  useEffect(() => {
    localStorage.setItem("bitcoinData" , JSON.stringify(watchlist))
  } ,[watchlist])


  const [openWatchlist, setOpenWatchlist] = useState(false);
  async function fetchData() {
    try {
      const url = "https://api.coincap.io/v2/assets/";
      const response = await fetch(url);
      const data = await response.json();

      setCryptoData(data.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(name) {
    const filteredCryptos = cryptoData.filter((crypto) =>
      crypto.name.toLowerCase().includes(name)
    );
    setCryptoData(filteredCryptos);

    if (name === "") {
      fetchData();
    }
  }
  function addToWatchlist(name, price, image) {
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

  function deleteCrypto(id) {
    const filteredCrypto = watchlist.filter((crypto) => crypto.id !== id);
    setWatchlist(filteredCrypto);
  }

  return (
    <div>
      <h1>Live Crypto Prices</h1>
      <input
      
      className="search-crypto-input"
        type="text"
        placeholder="Search crypto"
        onChange={(e) => handleChange((e.target.value).toLowerCase())}
      />

      <div className="container">
        {cryptoData.length > 0 ? (
          <>
            {cryptoData.map((crypto, index) => (
              <div key={crypto.name}>
                <h2>
                  <img
                    className="logo"
                    src={
                      images[
                        crypto.id.replace(/-/g, "").replace(/1|0/g, (match) => {
                          return match === "1" ? "one" : "zero";
                        })
                      ]
                    }
                  />

                  {crypto.name}
                </h2>
                <p>
                  $
                  {parseFloat(crypto.priceUsd).toFixed(2) != 0.0
                    ? parseFloat(crypto.priceUsd).toFixed(2)
                    : parseFloat(crypto.priceUsd).toFixed(5)}
                </p>
                <button
                  className="watchlist-button"
                  onClick={() =>
                    addToWatchlist(
                      crypto.name,
                      crypto.priceUsd,
                      images[
                        crypto.id.replace(/-/g, "").replace(/1|0/g, (match) => {
                          return match === "1" ? "one" : "zero";
                        })
                      ]
                    )
                  }
                >
                  Add to watchlist
                </button>
              </div>
            ))}
          </>
        ) : (
          <>
            <h1></h1>
            <h2>Crypto not found</h2>
          </>
        )}
      </div>

      <div className={openWatchlist ? "watchlist open" : "watchlist"}>
        <p className="icon">
          Show watchlist{" "}
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
          watchlist.map((item) => (
            <p key={item.price}>
              {" "}
              <img className="logo" src={item.logo} alt="" />
              {item.cryptoName} - ${parseFloat(item.price).toFixed(2) != 0.0
                    ? parseFloat(item.price).toFixed(2)
                    : parseFloat(item.price).toFixed(5)}{" "}
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

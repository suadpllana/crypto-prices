import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const FilteredCrypto = ({ id , filteredCrypto}) => {
    const [cryptoData, setCryptoData] = useState(null);
    const [chartData, setChartData] = useState([["Date", "Price"]]);
    const [loading, setLoading] = useState(true);
  

    async function fetchCryptoData() {
        setLoading(true);
        try {
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-DxNWbMiJ9vwHu5TMtcqoJdQH'}
              };
            const priceResponse = await fetch(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`,
                options
            );
            if (!priceResponse.ok){
                setLoading(false); 
                return;
            } 
            const priceData = await priceResponse.json();

    
            const formattedChartData = [["Date", "Price"]];
            priceData.prices.forEach(([timestamp, price]) => {
                formattedChartData.push([new Date(timestamp), price]);
            });

            setChartData(formattedChartData);
            setLoading(false)
        } catch (err) {
            setLoading(false); 
            return;
        } 
       
       
    }

    useEffect(() => {
        fetchCryptoData();
    }, [id]);

    return (
        <div className="filteredCrypto">
            {loading && <AiOutlineLoading3Quarters className="icon" />}
       
            {filteredCrypto && !loading &&  (
                <>
                    <img src={filteredCrypto[0].image} alt={filteredCrypto[0].name} />
                    <h1>
                        {filteredCrypto[0].name} ({filteredCrypto[0].symbol.toUpperCase()})
                    </h1>
                    {chartData.length > 1 && 
                    <Chart
                    className="chart"
                        chartType="LineChart"
                        data={chartData}
                        options={{ title: "Price Trend (Last 30 Days)", height: 400 }}
                    />
                    }
                    
                    { <div className="filteredDataContainer">
                    <p>Crypto Market Rank: <span>{filteredCrypto[0].market_cap_rank}</span></p>
                    <hr />
                    <p>Current Price: <span>${filteredCrypto[0].current_price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 5 })}</span></p>
                    <hr />
                  
                    <p>Market Cap Change (24h): <span>${filteredCrypto[0].market_cap_change_24h.toLocaleString()}</span></p>
                    <hr />
                    <p>24 Hour High: <span>${filteredCrypto[0].high_24h.toLocaleString()}</span></p>
                    <hr />
                    <p>24 Hour Low: <span>${filteredCrypto[0].low_24h.toLocaleString()}</span></p>
                    <hr />
                    </div> }
                 
                </>
            )}
        </div>
    );
};

export default FilteredCrypto;

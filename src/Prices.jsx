import React from 'react'
import {useState ,useEffect} from "react"
import { images } from './images'

const Prices = () => {

  const [cryptoData , setCryptoData] = useState([])


 
 

  async  function fetchData(){
    try{
      const url = "https://api.coincap.io/v2/assets/"
      const response = await fetch(url)
      const data = await response.json()
  
      setCryptoData(data.data)
      console.log(data)
    }
    catch(err){
      console.error(err)
    }
  
  }

  useEffect(() => {
  fetchData()
  } ,[])



  return (
    <div>
      <h1>Live Crypto Prices</h1>
     

      <div className="container">
     {cryptoData[0] ?
      <>
    
        <div >
          <h2> <img src={images.bitcoin} alt="" /> Bitcoin</h2>
          <p>${parseFloat(cryptoData[0].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.etherum} alt="" /> Etherum</h2>
          <p>${parseFloat(cryptoData[1].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.tether} alt="" /> Tether</h2>
          <p>${parseFloat(cryptoData[2].priceUsd).toFixed(2)}</p>
        </div>


        <div >
          <h2> <img src={images.bnb} alt="" /> BNB</h2>
          <p>${parseFloat(cryptoData[3].priceUsd).toFixed(2)}</p>
        </div>


        <div >
          <h2> <img src={images.solana} alt="" /> Solana</h2>
          <p>${parseFloat(cryptoData[4].priceUsd).toFixed(2)}</p>
        </div>


        <div >
          <h2> <img src={images.usdCoin} alt="" /> USD-Coin</h2>
          <p>${parseFloat(cryptoData[5].priceUsd).toFixed(2)}</p>
        </div>


        <div >
          <h2> <img src={images.xrp} alt="" /> Xrp</h2>
          <p>${parseFloat(cryptoData[6].priceUsd).toFixed(2)}</p>
        </div>


        <div >
          <h2> <img src={images.steth} alt="" /> Steth</h2>
          <p>${parseFloat(cryptoData[7].priceUsd).toFixed(2)}</p>
        </div>


        <div >
          <h2> <img src={images.dogecoin} alt="" /> Dogecoin</h2>
          <p>${parseFloat(cryptoData[8].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.cardano} alt="" /> Cardano</h2>
          <p>${parseFloat(cryptoData[9].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.tron} alt="" /> Tron</h2>
          <p>${parseFloat(cryptoData[10].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.avalanche} alt="" /> Avalanche</h2>
          <p>${parseFloat(cryptoData[11].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.wrappedBtc} alt="" /> WrappedBtc</h2>
          <p>${parseFloat(cryptoData[12].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.shiba} alt="" /> Shiba-Inu</h2>
          <p>${parseFloat(cryptoData[13].priceUsd).toFixed(5)}</p>
        </div>
       
        <div >
          <h2> <img src={images.chainLink} alt="" /> Chain-Link</h2>
          <p>${parseFloat(cryptoData[14].priceUsd).toFixed(2)}</p>
        </div>
       
        <div >
          <h2> <img src={images.btcCash} alt="" /> BtcCash</h2>
          <p>${parseFloat(cryptoData[15].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.polkadot} alt="" /> Polkadot</h2>
          <p>${parseFloat(cryptoData[16].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.nearProtocol} alt="" /> Near Protocol</h2>
          <p>${parseFloat(cryptoData[17].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.multiCollateral} alt="" /> Multi Collateral</h2>
          <p>${parseFloat(cryptoData[18].priceUsd).toFixed(2)}</p>
        </div>
       
        <div >
          <h2> <img src={images.unusSed} alt="" /> Unus Sed</h2>
          <p>${parseFloat(cryptoData[19].priceUsd).toFixed(2)}</p>
        </div>
        
        <div >
          <h2> <img src={images.litecoin} alt="" /> Litecoin</h2>
          <p>${parseFloat(cryptoData[20].priceUsd).toFixed(2)}</p>
        </div>


        <div >
          <h2> <img src={images.fetch} alt="" /> Fetch</h2>
          <p>${parseFloat(cryptoData[21].priceUsd).toFixed(2)}</p>
        </div>

        
        <div >
          <h2> <img src={images.internet} alt="" /> Internet-Computer</h2>
          <p>${parseFloat(cryptoData[22].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.uniswap} alt="" /> Uniswap</h2>
          <p>${parseFloat(cryptoData[23].priceUsd).toFixed(2)}</p>
        </div>

        
        <div >
          <h2> <img src={images.monero} alt="" /> Monero</h2>
          <p>${parseFloat(cryptoData[24].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.stacks} alt="" /> Stacks</h2>
          <p>${parseFloat(cryptoData[25].priceUsd).toFixed(2)}</p>
        </div>


        <div >
          <h2> <img src={images.stellar} alt="" /> Stellar</h2>
          <p>${parseFloat(cryptoData[26].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.etherumClassic} alt="" /> Etherum-Classic</h2>
          <p>${parseFloat(cryptoData[27].priceUsd).toFixed(2)}</p>
        </div>
       
        <div >
          <h2> <img src={images.aave} alt="" /> AAVE</h2>
          <p>${parseFloat(cryptoData[28].priceUsd).toFixed(2)}</p>
        </div>
       
        <div >
          <h2> <img src={images.okb} alt="" /> OKB</h2>
          <p>${parseFloat(cryptoData[29].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.filecoin} alt="" /> Filecoin</h2>
          <p>${parseFloat(cryptoData[30].priceUsd).toFixed(2)}</p>
        </div>
        <div >
          <h2> <img src={images.cryptoCom} alt="" /> Crypto.Com</h2>
          <p>${parseFloat(cryptoData[31].priceUsd).toFixed(2)}</p>
        </div>
        <div >
          <h2> <img src={images.vechain} alt="" /> Vechain</h2>
          <p>${parseFloat(cryptoData[32].priceUsd).toFixed(2)}</p>
        </div>
        <div >
          <h2> <img src={images.fantom} alt="" /> Fantom</h2>
          <p>${parseFloat(cryptoData[33].priceUsd).toFixed(2)}</p>
        </div>
      
        <div >
          <h2> <img src={images.graph} alt="" /> The-Graph</h2>
          <p>${parseFloat(cryptoData[34].priceUsd).toFixed(2)}</p>
        </div>
        <div >
          <h2> <img src={images.injectiveProtocol} alt="" /> Injective-Protocol</h2>
          <p>${parseFloat(cryptoData[35].priceUsd).toFixed(2)}</p>
        </div>
        <div >
          <h2> <img src={images.thorChain} alt="" /> Thor-Chain</h2>
          <p>${parseFloat(cryptoData[36].priceUsd).toFixed(2)}</p>
        </div>
        <div >
          <h2> <img src={images.arweave} alt="" /> Arweave</h2>
          <p>${parseFloat(cryptoData[37].priceUsd).toFixed(2)}</p>
        </div>
        <div >
          <h2> <img src={images.maker} alt="" /> Maker</h2>
          <p>${parseFloat(cryptoData[38].priceUsd).toFixed(2)}</p>
        </div>
        <div >
          <h2> <img src={images.theta} alt="" /> Theta</h2>
          <p>${parseFloat(cryptoData[39].priceUsd).toFixed(2)}</p>
        </div>
        <div >
          <h2> <img src={images.helium} alt="" /> Helium</h2>
          <p>${parseFloat(cryptoData[40].priceUsd).toFixed(2)}</p>
        </div>
        <div >
          <h2> <img src={images.polygon} alt="" /> Polygon</h2>
          <p>${parseFloat(cryptoData[41].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.cosmos} alt="" /> Cosmos</h2>
          <p>${parseFloat(cryptoData[42].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.algorand} alt="" /> Algorand</h2>
          <p>${parseFloat(cryptoData[43].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.lidaDao} alt="" /> Lido-Dao</h2>
          <p>${parseFloat(cryptoData[44].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.bitcoinSv} alt="" /> Bitcoin-Sv</h2>
          <p>${parseFloat(cryptoData[45].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.kucoin} alt="" /> Kucoin-Token</h2>
          <p>${parseFloat(cryptoData[46].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.quant} alt="" /> Quant</h2>
          <p>${parseFloat(cryptoData[47].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.flow} alt="" /> Flow</h2>
          <p>${parseFloat(cryptoData[48].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.hedera} alt="" /> Hedera</h2>
          <p>${parseFloat(cryptoData[49].priceUsd).toFixed(2)}</p>
        </div>

        <div >
          <h2> <img src={images.gatetoken} alt="" /> Gatetoken</h2>
          <p>${parseFloat(cryptoData[50].priceUsd).toFixed(2)}</p>
        </div>

       
       
       
       
       
       
       
  
      
      </> 
    :<></>}
       
       
    

      
      </div>
     
    </div>
  )
}

export default Prices

import React from 'react'
import {useState ,useEffect} from "react"
import { images } from './images'


const Prices = () => {
const [cryptoData , setCryptoData] = useState([])
const [cryptoName , setCryptoName] = useState("")
  async  function fetchData(){
    try{
      const url = "https://api.coincap.io/v2/assets/"
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setCryptoData(data.data)
      
    }
    catch(err){
      console.error(err)
    }
  
  }

  useEffect(() => {
  fetchData()
  
  } ,[])


    function handleChange(name){

        const filteredCryptos =  cryptoData.filter((crypto) => (crypto.name).toLowerCase().includes(name) )
        setCryptoData(filteredCryptos)
        console.log(filteredCryptos)
        
        if(name === ""){
          fetchData()
        }
        
    }


  return (
    <div>
      <h1>Live Crypto Prices</h1>
     <input type="text" placeholder="Search crypto here"   onChange={(e) => handleChange(e.target.value)}/>
      
      <div className="container">
     {cryptoData.length > 0 ?
      <>
    
        {cryptoData.map((crypto,index) => (
          <div key={crypto.name}>
          
          <h2> 
          <img src={images[crypto.id.replace(/-/g, "").replace(/1|0/g, (match) => {
  return match === "1" ? "one" : "zero";
})]}/> 
          
              {crypto.name}
              
              </h2>
              <p>${parseFloat(crypto.priceUsd).toFixed(2)}</p>
          </div>
        ))}

      </> 
    :
    <>
    <h1></h1>
    <h2>Crypto not found</h2>
    </>
    }


      </div>
     
    </div>
  )
}

export default Prices

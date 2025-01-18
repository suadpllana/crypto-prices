import Prices from "./Prices"
import Nav from './Nav';
import News from './News';
import {

  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from 'react';
import FilteredCrypto from './FilteredCrypto';
function App() {
  const [filteredCrypto, setFilteredCrypto] = useState([])
  const [id , setId] = useState("")
  

  return (
    <>
    <Router>
      <Nav/>
        <Routes>
          <Route path="/crypto-prices/" element={ <Prices setId={setId} setFilteredCrypto={setFilteredCrypto}/>} />
          <Route path="/crypto-prices/prices" element={ <Prices setFilteredCrypto={setFilteredCrypto}/>} />
          <Route path="/crypto-prices/news" element={ <News/>} />
          <Route path="*" element={<Navigate to="/crypto-prices/" />} />
          <Route path={`/crypto-prices/prices/${id}`} element={<FilteredCrypto filteredCrypto={filteredCrypto} id={id}/>} />
        </Routes>{" "}
      </Router>
   
    
    </>
  )
}

export default App

import Prices from "./Prices"
import Nav from './Nav';
import News from './News';
import {

  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {


  return (
    <>
    <Router>
      <Nav/>
        <Routes>
          <Route path="/crypto-prices/" element={ <Prices/>} />
          <Route path="/crypto-prices/prices" element={ <Prices/>} />
          <Route path="/crypto-prices/news" element={ <News/>} />
          <Route path="*" element={<Navigate to="/crypto-prices/" />} />
        
        </Routes>{" "}
      </Router>
   
    
    </>
  )
}

export default App

import './App.css';
import Home from './page/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetails from './page/Productdetails';
import Address from './page/Address';
import Ordersummary from './page/Ordersummary';
import Payments from './page/Payments';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<Productdetails />} />
          <Route path="/address" element={<Address />} />
          <Route path="/order-summary" element={<Ordersummary />} />
          <Route path="/payment" element={<Payments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

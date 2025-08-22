import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
// import { Button } from "./components/ui/button";
import mensBanner from "@/assets/banner_mens.png"
import womensBanner from "../src/assets/banner_women.png"
import kidsBanner from "@/assets/banner_kids.png"
import LandingPage from "./components/LandingPage";
import MensPage from "./pages/MensPage";
import WomensPage from "./pages/WomensPage";
import Kids from "./pages/Kids";
import ProductOverview from "./pages/ProductOverview";
import  Cart from "./pages/Cart";
import Address from "./pages/Address";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage/>} />
            <Route path="/mens" element={<MensPage banner={mensBanner} category="men"/>} />
            <Route path="/womens" element={<WomensPage banner={womensBanner} category="women"/>} />
            <Route path="/kids" element={<Kids banner={kidsBanner} category="kid"/>} />
            <Route path="/product/:id" element={<ProductOverview/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/adress" element={<Address/>} />
          </Route>
          <Route path="/signIn" element={<SignInPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

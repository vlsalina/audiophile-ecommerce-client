import React from "react";
import "./styles/Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import OrderScreen from "./screens/OrderScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CategoryScreen from "./screens/CategoryScreen";
import LoadingBox from "./components/loading/LoadingBox";
import SuccessScreen from "./screens/SuccessScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/category/:zone" element={<CategoryScreen />} />
            <Route path="/loading" element={<LoadingBox />} />
            <Route path="/checkout" element={<OrderScreen />} />
            <Route path="/success" element={<SuccessScreen />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

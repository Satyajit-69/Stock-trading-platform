import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

// CONFIG — single place to update URL
const API_BASE = "http://localhost:3001";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPricePerUnit, setStockPricePerUnit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { closeSellWindow } = useContext(GeneralContext);

  // 🔹 Fetch current stock price
  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        const res = await axios.get(`${API_BASE}/getStockPrice/${uid}`);
        const price = parseFloat(res.data.price) || 0;

        setStockPricePerUnit(price);
        setTotalPrice((1 * price).toFixed(2));
      } catch (err) {
        console.error("Error fetching stock price:", err);
      }
    };

    fetchStockPrice();
  }, [uid]);

  // 🔹 Recalculate total price on change
  useEffect(() => {
    const qty = parseFloat(stockQuantity) || 0;
    const price = parseFloat(stockPricePerUnit) || 0;
    setTotalPrice((qty * price).toFixed(2));
  }, [stockQuantity, stockPricePerUnit]);

  // Qty handler
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setStockQuantity(value);
  };

  // 🔹 Sell Request
  const handleSellClick = async () => {
    try {
      await axios.post(`${API_BASE}/sellOrder`, {
        name: uid,
        qty: stockQuantity,
        price: totalPrice,
      });

      closeSellWindow();
      alert("Sell order executed successfully!");
    } catch (err) {
      console.error("Error while selling:", err);
      alert("Error selling! Check console.");
    }
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={handleQuantityChange}
            />
          </fieldset>

          <fieldset>
            <legend>Total (₹)</legend>
            <input type="number" value={totalPrice} readOnly />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Current price ₹{stockPricePerUnit.toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;

import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPricePerUnit, setStockPricePerUnit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { closeSellWindow } = useContext(GeneralContext);

  // 🔹 Fetch current stock price when component mounts
  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        const res = await axios.get(`https://stock-monitoring-platform-backend.onrender.com/getStockPrice/${uid}`);
        const price = parseFloat(res.data.price) || 0;
        console.log("Fetched price:", price); // Debug log
        setStockPricePerUnit(price);
        setTotalPrice(price.toFixed(2)); // initialize for 1 qty
      } catch (err) {
        console.error("Error fetching stock price:", err);
      }
    };

    fetchStockPrice();
  }, [uid]);

  // 🔹 Recalculate total price when qty or price changes
  useEffect(() => {
    const qty = parseFloat(stockQuantity) || 0;
    const price = parseFloat(stockPricePerUnit) || 0;
    setTotalPrice((qty * price).toFixed(2));
  }, [stockQuantity, stockPricePerUnit]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setStockQuantity(value);
  };

  const handleSellClick = async () => {
    try {
      await axios.post("https://stock-monitoring-platform-backend.onrender.com/sellOrder", {
        name: uid,
        qty: stockQuantity,
        price: totalPrice,
      });
      closeSellWindow();
    } catch (err) {
      console.error("Error while selling:", err);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={handleQuantityChange}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Total (₹)</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={totalPrice}
              readOnly
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Current price ₹{stockPricePerUnit.toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
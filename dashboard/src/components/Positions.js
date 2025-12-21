import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const res = await axios.get("http://localhost:3001/allPositions");
      setPositions(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching positions:", err);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="orders">Loading positions...</div>;
  }

  return (
    <div className="orders">
      <h3 className="title">Positions ({positions.length})</h3>

      {positions.length === 0 ? (
        <p>No open positions</p>
      ) : (
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Avg</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg</th>
              </tr>
            </thead>

            <tbody>
              {positions.map((pos, idx) => {
                const currVal = pos.price * pos.qty;
                const pnl = currVal - pos.avg * pos.qty;
                const isProfit = pnl >= 0;

                return (
                  <tr key={idx}>
                    <td>{pos.product}</td>
                    <td>{pos.name}</td>
                    <td>{pos.qty}</td>
                    <td>{pos.avg.toFixed(2)}</td>
                    <td>{pos.price.toFixed(2)}</td>
                    <td className={isProfit ? "profit" : "loss"}>
                      {pnl.toFixed(2)}
                    </td>
                    <td className={pos.isLoss ? "loss" : "profit"}>
                      {pos.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Positions;

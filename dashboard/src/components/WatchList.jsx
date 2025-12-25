import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/watchlist";
import DoughnutChart from "./DoughnoutChart";

const WatchList = () => {
  const labels = watchlist.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "#ff0037",
          "#0099ff",
          "#ffb700",
          "#00ffff",
          "#5500ff",
          "#ff8000",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-4">
      {/* Search */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty"
          className="w-full mr-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-sm text-gray-500">
          {watchlist.length} / 50
        </span>
      </div>

      {/* Watchlist */}
      <ul className="space-y-2">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      {/* Chart */}
      <div className="mt-6">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;

/* ================= WatchList Item ================= */

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      className="relative p-3 rounded-md hover:bg-gray-100 transition"
    >
      <div className="flex justify-between items-center">
        <p
          className={`font-medium ${
            stock.isDown ? "text-red-500" : "text-green-600"
          }`}
        >
          {stock.name}
        </p>

        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-500">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-500" />
          ) : (
            <KeyboardArrowUp className="text-green-600" />
          )}
          <span className="font-semibold">{stock.price}</span>
        </div>
      </div>

      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

/* ================= Actions ================= */

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-2 bg-white shadow-md rounded-md p-1">
      <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
        <button
          onClick={() => generalContext.openBuyWindow(uid)}
          className="px-3 py-1 text-xs rounded bg-green-500 text-white hover:bg-green-600"
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
        <button
          onClick={() => generalContext.openSellWindow(uid)}
          className="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600"
        >
          Sell
        </button>
      </Tooltip>

      <Tooltip title="Analytics" arrow TransitionComponent={Grow}>
        <button className="p-1 rounded hover:bg-gray-200">
          <BarChartOutlined fontSize="small" />
        </button>
      </Tooltip>

      <Tooltip title="More" arrow TransitionComponent={Grow}>
        <button className="p-1 rounded hover:bg-gray-200">
          <MoreHoriz fontSize="small" />
        </button>
      </Tooltip>
    </div>
  );
};

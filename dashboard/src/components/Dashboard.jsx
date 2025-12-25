import React from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./Menu";
import TopBar from "./TopBar";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <GeneralContextProvider>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Menu />

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          <TopBar />

          <div className="flex flex-1 overflow-hidden">
            {/* Watchlist */}
            <div className="w-[320px] bg-white border-r overflow-y-auto">
              <WatchList />
            </div>

            {/* Page content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Summary />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/holdings" element={<Holdings />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/funds" element={<Funds />} />
                <Route path="/apps" element={<Apps />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;

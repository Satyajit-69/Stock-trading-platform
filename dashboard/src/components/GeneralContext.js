import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeActionWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [activeWindow, setActiveWindow] = useState(null); // "BUY" or "SELL"
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setActiveWindow("BUY");
    setSelectedStockUID(uid);
  };

  const handleOpenSellWindow = (uid) => {
    setActiveWindow("SELL");
    setSelectedStockUID(uid);
  };

  const handleCloseActionWindow = () => {
    setActiveWindow(null);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeActionWindow: handleCloseActionWindow,
      }}
    >
      {props.children}

      {/* Dynamically render window */}
      {activeWindow === "BUY" && <BuyActionWindow uid={selectedStockUID} />}
      {activeWindow === "SELL" && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

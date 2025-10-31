require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;
const url = process.env.MONGO_URL;

// Models
const HoldingModel = require("./models/HoldingModel");
const PositionModel = require("./models/PositionModel");
const OrderModel = require("./models/OrderModel");

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'https://*.vercel.app'],
  credentials: true
}));
app.use(bodyParser.json());

// ✅ Add Position data (test route)
app.get("/addPosition", async (req, res) => {
  const tempPosition = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  try {
    for (const item of tempPosition) {
      const newPosition = new PositionModel(item);
      await newPosition.save();
      console.log("Saved:", newPosition);
    }
    res.send("✅ Positions added successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error adding positions");
  }
});

// ✅ Get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching holdings");
  }
});

// ✅ Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching positions");
  }
});

// ✅ Get all orders
app.get("/allOrders", async (req, res) => {
  try {
    // Fetch all orders, sorted by newest first
    const allOrders = await OrderModel.find({}).sort({ createdAt: -1 });
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ 
      message: "Error fetching orders",
      error: err.message 
    });
  }
});
// ✅ POST new order
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    console.log("🆕 Order saved:", newOrder);
    res.status(201).send("Order placed successfully 🚀");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error placing order 😓");
  }
});

// ✅ SELL the order - Updated to handle both Holdings and Positions
app.post("/sellOrder", async (req, res) => {
  try {
    const { name, qty, price } = req.body;

    console.log(`📤 Sell request: ${qty} shares of ${name}`);

    // Try to find in HoldingModel first
    let existingStock = await HoldingModel.findOne({ name });
    let isFromHolding = true;

    // If not in Holdings, check PositionModel
    if (!existingStock) {
      existingStock = await PositionModel.findOne({ name });
      isFromHolding = false;
    }

    if (!existingStock) {
      return res.status(404).json({ 
        success: false,
        message: "❌ Stock not found in holdings or positions" 
      });
    }

    // Check if user has enough quantity to sell
    if (existingStock.qty < qty) {
      return res.status(400).json({
        success: false,
        message: `❌ Insufficient quantity. You have ${existingStock.qty} shares, trying to sell ${qty}`
      });
    }

    // Reduce the quantity
    existingStock.qty -= qty;

    // If all qty sold → delete the stock
    if (existingStock.qty <= 0) {
      if (isFromHolding) {
        await HoldingModel.deleteOne({ name });
      } else {
        await PositionModel.deleteOne({ name });
      }
      console.log(`🧾 Sold all of ${name}, removed from ${isFromHolding ? 'holdings' : 'positions'}`);
    } else {
      await existingStock.save();
      console.log(`💸 Updated ${name}: ${existingStock.qty} shares remaining`);
    }

    // Log the sell in Orders collection
    const sellOrder = new OrderModel({
      name,
      qty,
      price,
      mode: "SELL",
    });

    await sellOrder.save();

    res.status(200).json({
      success: true,
      message: "✅ Sell order completed successfully!",
      remainingQty: existingStock.qty > 0 ? existingStock.qty : 0
    });

  } catch (err) {
    console.error("Error in /sellOrder:", err);
    res.status(500).json({
      success: false,
      message: "❌ Error processing sell order: " + err.message
    });
  }
});



//to get the stock price 
app.get("/getStockPrice/:name", async (req, res) => {
  try {
    const { name } = req.params;
    console.log("Fetching price for:", name);
    
    // Try to find stock in HoldingsModel first
    let stock = await HoldingModel.findOne({ name: name });
    
    // If not found in Holdings, try PositionsModel
    if (!stock) {
      console.log("Not found in Holdings, checking Positions...");
      stock = await PositionsModel.findOne({ name: name });
    }
    
    if (!stock) {
      console.log("Stock not found:", name);
      return res.status(404).json({ 
        price: 0,   
        message: "Stock not found" 
      });
    }
    
    console.log("Stock found:", stock);
    
    // Try different possible field names for price
    const price = parseFloat(stock.price || stock.ltp || stock.avg || 0);
    
    console.log("Returning price:", price);
    res.json({ price });
    
  } catch (err) {
    console.error("Error in getStockPrice:", err.message);
    res.status(500).json({ 
      price: 0, 
      message: "Server error: " + err.message 
    });
  }
});







// ✅ Connect to MongoDB and start server
const mongoUrl = process.env.MONGO_URL || process.env.MONGODB_URI;

if (!mongoUrl) {
  console.error("❌ MONGO_URL environment variable is not set!");
  process.exit(1);
}

console.log("🔗 Attempting to connect to MongoDB...");

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(PORT, () => {
      console.log(`Backend running 🏃‍➡️ on port ${PORT} 📡`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed ❌", err);
    process.exit(1);
  });

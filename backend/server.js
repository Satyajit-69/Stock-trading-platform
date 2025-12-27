require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Initialize app
const app = express();
const PORT = process.env.PORT || 3001;
const mongoUrl = process.env.MONGO_URL || process.env.MONGODB_URI;

// -----------------------------
// Passport Config
// -----------------------------
require("./auth/passport");

// -----------------------------
// Models
// -----------------------------
const HoldingModel = require("./models/HoldingModel");
const PositionModel = require("./models/PositionModel");
const OrderModel = require("./models/OrderModel");

// -----------------------------
// Routes
// -----------------------------
const authRoutes = require("./auth/auth.routes");

// -----------------------------
// Middleware
// -----------------------------
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://stock-trading-platform-ochre.vercel.app",
    ],
    credentials: true,
  })
);


app.use(express.json());
app.use(bodyParser.json());
app.use(passport.initialize());

// -----------------------------
// Auth Routes
// -----------------------------
app.use("/api/auth", authRoutes);

// -----------------------------
// TEST ROUTE (Add sample positions)
// -----------------------------
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
      const newPos = new PositionModel(item);
      await newPos.save();
      console.log("Saved:", newPos);
    }
    res.send("Positions added successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding positions");
  }
});

// -----------------------------
// Holdings
// -----------------------------
app.get("/allHoldings", async (req, res) => {
  try {
    const data = await HoldingModel.find({});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching holdings");
  }
});

// -----------------------------
// Positions
// -----------------------------
app.get("/allPositions", async (req, res) => {
  try {
    const data = await PositionModel.find({});
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching positions");
  }
});

// -----------------------------
// Orders (GET + POST)
// -----------------------------
app.get("/allOrders", async (req, res) => {
  try {
    const data = await OrderModel.find({}).sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.status(201).send("Order placed successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error placing order");
  }
});

// -----------------------------
// Sell Order
// -----------------------------
app.post("/sellOrder", async (req, res) => {
  try {
    const { name, qty, price } = req.body;

    let stock = await HoldingModel.findOne({ name });
    let fromHolding = true;

    if (!stock) {
      stock = await PositionModel.findOne({ name });
      fromHolding = false;
    }

    if (!stock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    if (stock.qty < qty) {
      return res.status(400).json({
        message: `Insufficient quantity. You have ${stock.qty}, trying to sell ${qty}`,
      });
    }

    stock.qty -= qty;

    if (stock.qty === 0) {
      fromHolding
        ? await HoldingModel.deleteOne({ name })
        : await PositionModel.deleteOne({ name });
    } else {
      await stock.save();
    }

    const sellOrder = new OrderModel({
      name,
      qty,
      price,
      mode: "SELL",
    });

    await sellOrder.save();

    res.status(200).json({ message: "Sell order completed!" });
  } catch (err) {
    console.error("Sell error:", err);
    res.status(500).json({ message: "Error processing sell order" });
  }
});

// -----------------------------
// Get stock price
// -----------------------------
app.get("/getStockPrice/:name", async (req, res) => {
  try {
    const { name } = req.params;

    let stock = await HoldingModel.findOne({ name });
    if (!stock) stock = await PositionModel.findOne({ name });

    if (!stock) {
      return res
        .status(404)
        .json({ price: 0, message: "Stock not found" });
    }

    const price = parseFloat(stock.price || stock.ltp || stock.avg || 0);
    res.json({ price });
  } catch (err) {
    console.error("Error in getStockPrice:", err);
    res.status(500).json({ price: 0, message: err.message });
  }
});

// -----------------------------
// MongoDB Connect + Start Server
// -----------------------------
if (!mongoUrl) {
  console.error("❌ MONGO_URL not set!");
  process.exit(1);
}

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("MongoDB connected ✔");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB error ❌", err);
    process.exit(1);
  });

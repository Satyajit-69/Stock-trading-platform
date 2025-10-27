const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Sample data
let holdings = [
  {
    name: "BHARTIARTL",
    qty: 2,
    avg: 538.05,
    price: 541.15,
    net: "+0.58%",
    day: "+2.99%",
  },
  {
    name: "HDFCBANK",
    qty: 2,
    avg: 1383.4,
    price: 1522.35,
    net: "+10.04%",
    day: "+0.11%",
  },
  {
    name: "HINDUNILVR",
    qty: 1,
    avg: 2335.85,
    price: 2417.4,
    net: "+3.49%",
    day: "+0.21%",
  },
  {
    name: "INFY",
    qty: 1,
    avg: 1350.5,
    price: 1555.45,
    net: "+15.18%",
    day: "-1.60%",
  },
  {
    name: "ITC",
    qty: 5,
    avg: 202.0,
    price: 207.9,
    net: "+2.92%",
    day: "+0.80%",
  },
];

let positions = [
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

let orders = [];

// API Endpoints

// Get all holdings
app.get('/allHoldings', (req, res) => {
  res.json(holdings);
});

// Get all positions
app.get('/allPositions', (req, res) => {
  res.json(positions);
});

// Create new order
app.post('/newOrder', (req, res) => {
  const order = {
    id: orders.length + 1,
    ...req.body,
    timestamp: new Date(),
    status: 'completed'
  };
  orders.push(order);
  console.log('✅ New order placed:', order);
  res.json({ success: true, order });
});

// Get all orders
app.get('/allOrders', (req, res) => {
  res.json(orders);
});

// Add new holding
app.post('/addHolding', (req, res) => {
  const holding = req.body;
  holdings.push(holding);
  console.log('✅ New holding added:', holding);
  res.json({ success: true, holding });
});

// Delete holding
app.delete('/holding/:name', (req, res) => {
  const { name } = req.params;
  holdings = holdings.filter(h => h.name !== name);
  console.log('🗑️  Holding deleted:', name);
  res.json({ success: true, message: 'Holding deleted' });
});

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'running',
    message: 'Trading Dashboard Backend API',
    endpoints: {
      holdings: '/allHoldings',
      positions: '/allPositions',
      orders: '/allOrders',
      newOrder: 'POST /newOrder'
    }
  });
});

app.listen(PORT, () => {
  console.log(`
  🚀 Backend server running!
  📍 Local: http://localhost:${PORT}
  
  Available endpoints:
  - GET  /allHoldings
  - GET  /allPositions
  - GET  /allOrders
  - POST /newOrder
  `);
});
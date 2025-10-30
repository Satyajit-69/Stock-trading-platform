require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;
const url = process.env.MONGO_URL;

const HoldingModel  = require("../backend/models/HoldingModel");
const PositionModel = require("../backend/models/PositionModel");
const OrderModel = require("../backend/models/OrderModel");

app.use(cors());
app.use(bodyParser.json());

// // app.get("/addHolding", async (req, res) => {
//   let tempHolding = [
//    
//   ];

//   //we are making new holding and adding to the database
//   tempHolding.forEach((item) => {
//     let newHolding = new HoldingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });

//     newHolding.save();
//     console.log(newHolding);
//   });

//   res.send("Data insertion done :) !")
// // });


app.get("/addPosition", async (req, res) => {
  let tempPosition = [
    {
      product: "CNCuy",
      name: "EVEREADYio",
      qty: 2,
      avg: 316.27,
      price: 312.3545,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
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

  // add to database
for (const item of tempPosition) {
  const newPosition = new PositionModel({
    product: item.product,
    name: item.name,
    qty: item.qty,
    avg: item.avg,
    price: item.price,
    net: item.net,
    day: item.day,
    isLoss: item.isLoss,
  });

  await newPosition.save();
  console.log("Saved:", newPosition);
}

res.send("Added Positions :)");

});




//checking the api end points 
app.get("/allHoldings" , async(req,res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings) ;
})

app.get("/allPositions" , async(req,res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions) ;
})


app.get("/newOrder" , async(req,res) => {
  let newOrder = new OrderModel({
    name : req.body.name ,
    qty:req.body.qty ,
    price :req.body.price,
    mode :req.body.mode 
  })

  newOrder.save() ;
  res.send("successful order ! :)")
})
app.listen(PORT, () => {
  console.log(`Backend is running  🏃‍➡️  on port ${PORT}📍`);
  mongoose.connect(url);
  console.log("Mongo DB connected ✅🔒");
});

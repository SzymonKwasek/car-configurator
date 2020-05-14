const express = require("express");
const app = express();
const port = 5000;

const data = require('./data.json')

app.get("/api/cars", (req, res) => {
    res.json(data);
});
  

app.get("/api/pro", (req, res) => {
  const car = {
        engines: ['5.2L 532BHP', '4.2L 443BHP', '3.6L 374BHP', '2.0L 166BHP'],
        gearboxes: ['Automatic'],
        colors: ['red', 'gray', 'brown', 'black']
    }
  res.json(car);
});


app.get("/api/uber", (req, res) => {
    const car = {
          engines: ['4.2L 443BHP', '3.6L 374BHP', '2.0L 166BHP'],
          gearboxes: ['Manual', 'Automatic'],
          colors: ['red', 'gray', 'brown']
      }
    res.json(car);
});

app.get("/api/standard", (req, res) => {
    const car = {
          engines: ['3.6L 374BHP', '2.0L 166BHP'],
          gearboxes: ['Manual'],
          colors: ['red', 'gold', 'brown']
      }
    res.json(car);
});

app.get("/api/wk", (req, res) => {
    const car = {
          engines: ['2.0L 166BHP'],
          gearboxes: ['Manual'],
          colors: ['red', 'gold', 'brown', 'black', 'blue']
      }
    res.json(car);
});

app.listen(port, () => console.log(`Server started, port ${port}`));
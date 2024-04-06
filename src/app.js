const express = require("express");
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/product', productRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



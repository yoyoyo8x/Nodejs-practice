// NodeJS
// import { createServer } from "http";

// const app = createServer((req, res) => {
//   if (req.url === "/" && res.method === "GET") {
//     res.end(`<h1>Homepage</h1>`);
//   }
//   if (req.url === "/product" && res.method === "GET") {
//     res.end(`<h1>Product</h1>`);
//   }
//   if (req.url === "/cart" && res.method === "GET") {
//     res.end(`<h1>Cart</h1>`);
//   }
// });

// ExpessJS
import express from "express";
const app = express();

const product = [
  {
    id: "1",
    name: "P1",
    price: "200",
    description: "Test",
  },
  {
    id: "2",
    name: "P1",
    price: "200",
    description: "Test",
  },
  {
    id: "3",
    name: "P1",
    price: "200",
    description: "Test",
  },
  {
    id: "4",
    name: "P1",
    price: "200",
    description: "Test",
  },
  {
    id: "5",
    name: "P1",
    price: "200",
    description: "Test",
  },
];

app.get("/product", (req, res) => {
  //   res.end(`<h1>Product</h1>`);
  res.end(res.json(JSON.stringify(product)));
});

app.get("/product/:id", (req, res) => {
  console.log(req.params.id);
  res.end(`<h1>Product with id : ${req.params.id}</h1>`);
});

// Run server on specified port
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

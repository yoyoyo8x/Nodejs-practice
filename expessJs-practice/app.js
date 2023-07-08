const express = require("express");
const app = express();
const PORT = 8000;
const router = require("./router/index");

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});

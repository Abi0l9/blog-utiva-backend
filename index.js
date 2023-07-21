const express = require("express");
const cors = require("cors");
const app = express();
const BlogRouter = require("./controllers/blog");
const EmailRouter = require("./controllers/email");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
require("./db");

app.use("/api/blogs", BlogRouter);
app.use("/api/emails", EmailRouter);

const PORT = 7129;
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});

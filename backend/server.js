const express = require("express");
const port = process.env.PORT || 5000;
const ideasRouter = require("./routes/ideas");
const connectDB = require("./config/db");

require("dotenv").config();
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
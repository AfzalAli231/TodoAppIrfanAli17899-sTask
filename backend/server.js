//Imports
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./config/dbConnect");
const { todoRouter } = require("./routes/todo.route");
const dotenv = require("dotenv");
const path = require("path");
const { userRouter } = require("./routes/user.route");

const app = express();
const port = process.env.PORT || 4000;

// ENV Config
if(process.env.NODE_ENV !== "PRODUCTION"){dotenv.config()}

//App Uses
app.use(cors());
app.use(express.json());

// DB Connect
dbConnect();

//Routes
app.use("/api", todoRouter)
app.use("/api", userRouter);


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//Server Listener
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

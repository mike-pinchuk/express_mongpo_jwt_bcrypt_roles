const express = require("express");
const mongoose = require("mongoose");
const authRouter = require('./authRouter');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json())
app.use('/auth', authRouter)

const server = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mike:qwerty123@cluster0.ebtcp.mongodb.net/jwt_authentication?retryWrites=true&w=majority", { useUnifiedTopology: true }
    );
    app.listen(PORT, () => console.log("Server has been started successfully"));
  } catch (e) {
    console.log(e);
  }
};

server();

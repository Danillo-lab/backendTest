const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path")
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json([{"text": "Hello world"}])
})

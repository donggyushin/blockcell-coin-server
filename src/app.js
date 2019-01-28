import express from "express";

const app = express();
console.log(__dirname);
app.use("/", express.static(__dirname + "/../../client/build"));

export default app;

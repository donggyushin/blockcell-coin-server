import express from "express";
import router from "./APIs";

const app = express();
app.use("/", express.static(__dirname + "/../../client/build"));
app.use("/static", express.static(__dirname + "/Static"));
app.use("/api", router);

export default app;

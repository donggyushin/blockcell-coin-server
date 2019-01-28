import app from "./app";
import dotenv from "dotenv";

dotenv.config();

let PORT = 3000;

const env = process.env.NODE_ENV || "dev";

if (env !== "dev") {
  PORT = process.env.PORT;
}

const handleListen = () => {
  console.log(`blockcell coin server is listening on ${PORT}`);
};

app.listen(3000, handleListen);

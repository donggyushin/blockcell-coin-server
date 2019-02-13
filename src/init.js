import app from "./app";
import dotenv from "dotenv";

dotenv.config();

let PORT = 8001;

const handleListen = () => {
  console.log(`blockcell coin server is listening on ${PORT}`);
};

app.listen(PORT, handleListen);

import express from "express";
import routes from "../Routes/routes";
import files from "./files";
const router = express.Router();

router.use(routes.files, files);

export default router;

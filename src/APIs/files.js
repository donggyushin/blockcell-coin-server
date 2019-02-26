import express from "express";
import routes from "../Routes/routes";
import { downloadFile } from "../Controllers/files";
const router = express.Router();

router.get(routes.download, downloadFile);

export default router;

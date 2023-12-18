import { Router } from "express";
import { indexGet } from "../endpoints";

const router = Router();

/**
 * GET /
 * @tag Index
 * @response 200
 * @responseContent {string} 200.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get("/", indexGet);

export default router;

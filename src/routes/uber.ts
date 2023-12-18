import { Router } from "express";
import { uberLoginPost, uberProfileGet } from "../endpoints/uber";

const router = Router();

/**
 * POST /uber/login
 * @tag Uber
 * @bodyContent {UberLoginPostRequestBody} application/json
 * @response 200
 * @responseContent {UberLoginPostResponseBody} 200.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */
router.post("/uber/login", uberLoginPost);

/**
 * GET /uber/profile/{accessToken}
 * @tag Uber
 * @response 200
 * @responseContent {UberProfileGetResponseBody} 200.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get("/uber/profile/:accessToken", uberProfileGet);

export default router;

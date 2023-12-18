import { Router } from "express";
import { uberLoginPost, uberProfileGet } from "../endpoints/uber";
import { body, params } from "@ev-fns/validation";
import { uberLoginPostBody, uberProfileGetParams } from "../validations/uber";

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
router.post("/uber/login", body(uberLoginPostBody), uberLoginPost);

/**
 * GET /uber/profile/{accessToken}
 * @tag Uber
 * @pathParam {string} accessToken
 * @response 200
 * @responseContent {UberProfileGetResponseBody} 200.application/json
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get(
  "/uber/profile/:accessToken",
  params(uberProfileGetParams),
  uberProfileGet,
);

export default router;

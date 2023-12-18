import { endpoint } from "@ev-fns/endpoint";
import { HttpError } from "@ev-fns/errors";
import { ResponseMessage } from "../utils/constants";

export const uberLoginPost = endpoint(async (req, res) => {
  const { email, password } = req.body;

  if (
    email !== process.env.UBER_LOGIN_EMAIL ||
    password !== process.env.UBER_LOGIN_PASSWORD
  ) {
    res.json({
      message: ResponseMessage.CREDENTIALS_INVALID,
      details: "Incorrect username or password",
    });

    return;
  }

  res.json({
    message: ResponseMessage.SUCCESS,
    accessToken: process.env.UBER_ACCESS_TOKEN,
  });
});

export const uberProfileGet = endpoint(async (req, res) => {
  throw new HttpError(501, "Not Implemented");
});

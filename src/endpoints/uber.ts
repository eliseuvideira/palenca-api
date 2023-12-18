import { endpoint } from "@ev-fns/endpoint";
import { Platform, ResponseMessage } from "../utils/constants";

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
  const { accessToken } = req.params;

  if (accessToken !== process.env.UBER_ACCESS_TOKEN) {
    res.json({
      message: ResponseMessage.CREDENTIALS_INVALID,
      details: "Incorrect token",
    });

    return;
  }

  res.json({
    message: ResponseMessage.SUCCESS,
    platform: Platform.uber,
    profile: {},
  });
});

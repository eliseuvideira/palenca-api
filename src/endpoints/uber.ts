import { endpoint } from "@ev-fns/endpoint";
import { HttpError } from "@ev-fns/errors";

export const uberLoginPost = endpoint(async (req, res) => {
  throw new HttpError(501, 'Not Implemented');
});

export const uberProfileGet = endpoint(async (req, res) => {
  throw new HttpError(501, 'Not Implemented');
});

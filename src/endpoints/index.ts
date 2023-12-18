import { endpoint } from "@ev-fns/endpoint";

export const indexGet = endpoint(async (req, res) => {
  res.status(200).send("Hello Palenca").end();
});

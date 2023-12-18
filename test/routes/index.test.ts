import "../fixture";

import { request } from "../request";

const AUTHORIZATION = { authorization: `Bearer ${process.env.API_TOKEN}` };

describe("/", () => {
  describe("200 - OK", () => {
    test("GET /", async () => {
      expect.assertions(2);

      const response = await request().get("/");

      expect(response.status).toBe(200);
      expect(response.text).toEqual('Hello Palenca');
    });
  });
});

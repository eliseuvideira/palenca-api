import "../fixture";

import { request } from "../request";

describe("POST /uber/login", () => {
  describe("400 - Bad Request", () => {
    test("No body", async () => {
      expect.assertions(1);

      const res = await request().post("/uber/login");

      expect(res.status).toBe(400);
    });

    test("No email", async () => {
      expect.assertions(1);

      const res = await request().post("/uber/login").send({
        password: "password",
      });

      expect(res.status).toBe(400);
    });

    test("No password", async () => {
      expect.assertions(1);

      const res = await request().post("/uber/login").send({
        email: "email@email.com",
      });

      expect(res.status).toBe(400);
    });

    test("Empty email", async () => {
      expect.assertions(1);

      const res = await request().post("/uber/login").send({
        email: "",
        password: "password",
      });

      expect(res.status).toBe(400);
    });

    test("Empty password", async () => {
      expect.assertions(1);

      const res = await request().post("/uber/login").send({
        email: "email@email.com",
        password: "",
      });

      expect(res.status).toBe(400);
    });

    test("Invalid email", async () => {
      expect.assertions(1);

      const res = await request().post("/uber/login").send({
        email: "email",
        password: "password",
      });

      expect(res.status).toBe(400);
    });
  });

  describe("401 - Unauthorized", () => {
    test("Invalid credentials", async () => {
      expect.assertions(2);

      const res = await request().post("/uber/login").send({
        email: "email@email.com",
        password: "password",
      });

      expect(res.status).toBe(401);
      expect(res.body).toEqual({
        message: "CREDENTIALS_INVALID",
        details: "Incorrect username or password",
      });
    });
  });

  describe("200 - OK", () => {
    test("Valid credentials", async () => {
      expect.assertions(2);

      const res = await request().post("/uber/login").send({
        email: process.env.UBER_LOGIN_EMAIL,
        password: process.env.UBER_LOGIN_PASSWORD,
      });

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        message: "SUCCESS",
        accessToken: process.env.UBER_ACCESS_TOKEN,
      });
    });
  });
});

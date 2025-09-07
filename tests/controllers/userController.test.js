import request from "supertest";
import app from "../../src/app.js";

describe("User controller", () => {
  it("deve criar um usuario com sucesso (POST /users)", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Teste com JEST", email: "teste@jest.com", password: "jest" });

    expect(res.status).toBe(201);
  });

  it("deve buscar os usuarios com sucesso (GET /users)", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(201);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

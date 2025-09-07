import request from "supertest";
import app from "../../src/app.js";

describe("User controller", () => {
  it("deve criar um usuario com sucesso (POST /users)", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Teste com JEST", email: "teste@jest.com", password: "jest" });
  });
});

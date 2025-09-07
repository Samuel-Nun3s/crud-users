import { User } from "../../src/models/User.js";

describe("User model", () => {
  it("deve criar um usuario valido", () => {
    const user = new User({ name: "Samuel", email: "samuel@teste.com", password: "teste"});
    expect(user.name).toBe("Samuel");
  });

  it("deve falhar se o email nao for informado", async () => {
    const user = new User({ name: "Samuel" });

    await expect(user.validate()).rejects.toThrow();
  });
});

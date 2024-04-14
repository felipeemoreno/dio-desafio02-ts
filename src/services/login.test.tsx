import { login } from "./login";

describe("login", () => {
  const mockCustomer = "Felipe";
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir um alert com boas vindas", () => {
    login({ customer: mockCustomer });
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockCustomer}!`);
  });
});

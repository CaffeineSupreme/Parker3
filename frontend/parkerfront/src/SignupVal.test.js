import validation from "./SignupVal";

test('validation function should pass on inputs with the correct email format', () => {
    const values = ["failing test", "failing test email", "failingpassword"]
   
    expect(validation(values)).toEqual({
        name: "",
        email: "Email format is invalid",
        password: "Password must contain uppercase, lowercase, and number"
    });
})
import { render, screen } from '@testing-library/react';
import App from './App';
import validation from './LoginVal';

test("validation function should pass on inputs with the correct email format", () => {
  const testEmail = "test@test.com";
  expect(validation(testEmail)).toBe(true);
});



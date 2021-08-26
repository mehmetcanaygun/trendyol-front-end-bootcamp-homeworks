import { divide } from "../src/divide";

describe("Check Divide Function", () => {
  it("should divide given numbers", () => {
    // arrange
    const num1 = 8;
    const num2 = 4;

    // act
    const result = divide(num1, num2);

    // assert
    expect(result).toBe(2);
  });

  it("should throw error 'invalid numbers' when numbers are not actual numbers", () => {
    // arrange
    const num1 = 8;
    const num2 = "4";

    // act
    const thrown = () => divide(num1, num2);

    // assert
    expect(thrown).toThrow("invalid numbers");
  });

  it("should throw error 'divide by zero' when the second parameter is zero", () => {
    // arrange
    const num1 = 6;
    const num2 = 0;

    // act
    const thrown = () => divide(num1, num2);

    // assert
    expect(thrown).toThrow("divide by zero");
  });
});

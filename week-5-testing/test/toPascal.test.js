import { toPascal } from "../src/toPascal";

describe("Pascal Case", () => {
  it("should return title with each word's first letter is capital", () => {
    // arrange
    const title = "hello i am mehmet can";

    // act
    const returnedTitle = toPascal(title);

    //assert
    expect(returnedTitle).toBe("Hello I Am Mehmet Can");
  });

  it("should return an empty string if given string is empty", () => {
    // arrange
    const title = "";

    // act
    const returnedTitle = toPascal(title);

    //assert
    expect(returnedTitle).toBe("");
  });

  it("should not make pascal case when word is 'and' and 'or'", () => {
    // arrange
    const title = "to be or not to be";

    // act
    const returnedTitle = toPascal(title);

    //assert
    expect(returnedTitle).toBe("To Be or Not To Be");
  });
});

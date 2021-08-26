export const divide = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("invalid numbers");

  if (b === 0) throw new Error("divide by zero");

  return a / b;
};

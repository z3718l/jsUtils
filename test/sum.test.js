const sum = require("./sum");

test("fasd [1,2] to equal '1,20,2'", () => {
  expect(sum([1, 2])).toBe("1,2");
});

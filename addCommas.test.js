const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('it should add commas to positive numbers', () => {
    expect(addCommas(1654)).toBe("1,654");
    expect(addCommas(1000000)).toBe("1,000,000");
    expect(addCommas(6435676)).toBe("6,435,676");
    expect(addCommas(6)).toBe("6");
  })
  
  test('it should add commas to negative numbers', () => {
    expect(addCommas(-1)).toBe("-1");
    expect(addCommas(-743536)).toBe("-743,536");
  })

  test('it should add commas to decimal numbers', () => {
    expect(addCommas(13422.111)).toBe("13,422.111");
    expect(addCommas(-23425324.65)).toBe("-23,425,324.65");
  })
});
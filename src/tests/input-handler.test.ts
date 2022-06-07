import inputHandler from '../utils/input-handler'

describe("digits inputs works right", () => {
	test("inputHandler('1', '', '0') returns ['', '0']", () => {
    expect(inputHandler('1', '', '0')).toEqual(['1', '0'])
  });
  test("inputHandler('1', '', '0') returns ['', '0']", () => {
    expect(inputHandler('1', ')', '0')).toEqual([')', '0'])
  });
})

describe("nulls inputs works right", () => {
  test("inputHandler('0', '0', '0') returns ['0', '0']", () => {
    expect(inputHandler('0', '0', '0')).toEqual(['0', '0'])
  });
  test("inputHandler('00', '0', '0') returns ['0', '0']", () => {
    expect(inputHandler('00', '0', '0')).toEqual(['0', '0'])
  });
  test("inputHandler('0', '', '0') returns ['0', '0']", () => {
    expect(inputHandler('0', '', '0')).toEqual(['0', '0'])
  });
  test("inputHandler('00', '', '0') returns ['0', '0']", () => {
    expect(inputHandler('00', '', '0')).toEqual(['0', '0'])
  });
  test("inputHandler('0', '1', '0') returns ['10', '0']", () => {
    expect(inputHandler('0', '1', '0')).toEqual(['10', '0'])
  });
  test("inputHandler('00', '1', '0') returns ['100', '0']", () => {
    expect(inputHandler('00', '1', '0')).toEqual(['100', '0'])
  });
  test("inputHandler('0', '0.', '0') returns ['0.0', '0']", () => {
    expect(inputHandler('0', '0.', '0')).toEqual(['0.0', '0'])
  });
  test("inputHandler('00', '0.', '0') returns ['0.00', '0']", () => {
    expect(inputHandler('00', '0.', '0')).toEqual(['0.00', '0'])
  });
  test("inputHandler('0', '10+', '0') returns ['10+0', '0']", () => {
    expect(inputHandler('0', '10+', '0')).toEqual(['10+0', '0'])
  });
  test("inputHandler('00', '10+', '0') returns ['10+0', '0']", () => {
    expect(inputHandler('00', '10+', '0')).toEqual(['10+0', '0'])
  });
  test("inputHandler('0', '10+0', '0') returns ['10+0', '0']", () => {
    expect(inputHandler('0', '10+0', '0')).toEqual(['10+0', '0'])
  });
  test("inputHandler('00', '10+0', '0') returns ['10+0', '0']", () => {
    expect(inputHandler('00', '10+0', '0')).toEqual(['10+0', '0'])
  });
})

describe("operators inputs works right", () => {
  test("inputHandler('+', '20', '0') returns ['20+', '0']", () => {
    expect(inputHandler('+', '20', '0')).toEqual(['20+', '0'])
  });
  test("inputHandler('+', '20)', '0') returns ['20)+', '0']", () => {
    expect(inputHandler('+', '20)', '0')).toEqual(['20)+', '0'])
  });
  test("inputHandler('+', '20)+', '0') returns ['20)+', '0']", () => {
    expect(inputHandler('+', '20)+', '0')).toEqual(['20)+', '0'])
  });
  test("inputHandler('-', '20', '0') returns ['20-', '0']", () => {
    expect(inputHandler('-', '20', '0')).toEqual(['20-', '0'])
  });
  test("inputHandler('-', '20)+', '0') returns ['20)+-', '0']", () => {
    expect(inputHandler('-', '20)+', '0')).toEqual(['20)+-', '0'])
  });
})

describe("left round bracket input works right", () => {
  test("inputHandler('(', '10+', '0') returns ['10+(', '0']", () => {
    expect(inputHandler('(', '10+', '0')).toEqual(['10+(', '0'])
  });
  test("inputHandler('(', '20', '0') returns ['20', '0']", () => {
    expect(inputHandler('(', '20', '0')).toEqual(['20', '0'])
  });
})

describe("right round bracket input works right", () => {
  test("inputHandler(')', '10', '0') returns ['10', '0']", () => {
    expect(inputHandler(')', '10', '0')).toEqual(['10', '0'])
  });
  test("inputHandler(')', '(10', '0') returns ['(10)', '0']", () => {
    expect(inputHandler(')', '(10', '0')).toEqual(['(10)', '0'])
  });
  test("inputHandler(')', '(20+', '0') returns ['(20+', '0']", () => {
    expect(inputHandler(')', '(20+', '0')).toEqual(['(20+', '0'])
  });
})

describe("equals input works right", () => {
  test("inputHandler('=', '10', '0') returns ['10', '10']", () => {
    expect(inputHandler('=', '10', '0')).toEqual(['10=', '10'])
  });
  test("inputHandler('=', '10', '0') returns ['10', '10']", () => {
    expect(inputHandler('=', '10', '0')).toEqual(['10=', '10'])
  });
})

describe("C input works right", () => {
  test("inputHandler('C', '10', '0') returns ['0', '0']", () => {
    expect(inputHandler('C', '10', '0')).toEqual(['', '0'])
  });
})
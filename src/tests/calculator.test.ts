import {calcInside, 
    calcResult,
    checkParentheses, 
    multiDivide, 
    strToArray, 
    sumSubtract} from '../utils/calculator'

describe("multiDivide works correctly", () => {
	test("multiDivide(['20', '×', '10']) returns [200]", () => {
    expect(multiDivide(['20', '×', '10'])).toEqual(['200'])
  });
  test("multiDivide(['20', '/', '10']) returns [2]", () => {
    expect(multiDivide(['20', '/', '10'])).toEqual(['2'])
  });
})

describe("sumSubtract works correctly", () => {
	test("sumSubtract(['20', '+', '10']) returns [30]", () => {
    expect(sumSubtract(['20', '+', '10'])).toEqual(['30'])
  });
  test("sumSubtract(['20', '-', '10']) returns [10]", () => {
    expect(sumSubtract(['20', '-', '10'])).toEqual(['10'])
  });
})

describe("strToArray works correctly", () => {
	test("strToArray('(10)') returns ['(', '10', ')']", () => {
    expect(strToArray('(10)')).toEqual(['(', '10', ')'])
  });
	test("strToArray('20-(10)') returns ['20', '-', '(', '10', ')']", () => {
    expect(strToArray('20-(10)')).toEqual(['20', '-', '(', '10', ')'])
  });
	test("strToArray('-(10)') returns ['-1', '×', '(', '10', ')']", () => {
    expect(strToArray('-(10)')).toEqual(['-1', '×', '(', '10', ')'])
  });
  test("strToArray('(-10)') returns ['(', '-10', ')']", () => {
    expect(strToArray('(-10)')).toEqual(['(', '-10', ')'])
  });
	test("strToArray('20+-(10)') returns ['20', '+', '-1', '×', '(', '10', ')']", () => {
    expect(strToArray('20+-(10)')).toEqual(['20', '+', '-1', '×', '(', '10', ')'])
  });
  test("strToArray('1,5') returns ['1.5']", () => {
    expect(strToArray('1,5')).toEqual(['1.5'])
  });
  test("strToArray(',5') returns ['.5']", () => {
    expect(strToArray(',5')).toEqual(['.5'])
  });
	test("strToArray('1') returns ['1']", () => {
    expect(strToArray('1')).toEqual(['1'])
  });
	test("strToArray('12') returns ['12']", () => {
    expect(strToArray('12')).toEqual(['12'])
  });
	test("strToArray('123456') returns ['123456']", () => {
    expect(strToArray('123456')).toEqual(['123456'])
  });
	test("strToArray('-20') returns ['-20']", () => {
    expect(strToArray('-20')).toEqual(['-20'])
  });

  test("strToArray('1e+24') returns ['1e+24']", () => {
    expect(strToArray('1e+24')).toEqual(['1e+24'])
  });
  test("strToArray('1e-24') returns ['1e-24']", () => {
    expect(strToArray('1e-24')).toEqual(['1e-24'])
  });
  test("strToArray('1e-24-2') returns ['1e-24', '-', '2']", () => {
    expect(strToArray('1e-24-2')).toEqual(['1e-24', '-', '2'])
  });
  test("strToArray('1.1234e+10') returns ['1.1234e+10']", () => {
    expect(strToArray('1.1234e+10')).toEqual(['1.1234e+10'])
  });

	test("strToArray('20+10') returns ['20', '+', '10']", () => {
    expect(strToArray('20+10')).toEqual(['20', '+', '10'])
  });
	test("strToArray('20-10') returns ['20', '-', '10']", () => {
    expect(strToArray('20-10')).toEqual(['20', '-', '10'])
  });
	test("strToArray('20×10') returns ['20', '×', '10']", () => {
    expect(strToArray('20×10')).toEqual(['20', '×', '10'])
  });
	test("strToArray('20/10') returns ['20', '/', '10']", () => {
    expect(strToArray('20/10')).toEqual(['20', '/', '10'])
  });
	test("strToArray('20+-10') returns ['20', '+', '-10']", () => {
    expect(strToArray('20+-10')).toEqual(['20', '+', '-10'])
  });
	test("strToArray('20×-10') returns ['20', '×', '-10']", () => {
    expect(strToArray('20×-10')).toEqual(['20', '×', '-10'])
  });
	test("strToArray('20/-10') returns ['20', '/', '-10']", () => {
    expect(strToArray('20/-10')).toEqual(['20', '/', '-10'])
  });
	test(`strToArray('0+-(7×10)/5-8') returns 
    ['0', '+', '-1', '×', '(', '7', '×', '10', ')', '/', '5', '-', '8']`, () => {
    expect(strToArray('0+-(7×10)/5-8')).toEqual(
      ['0', '+', '-1', '×', '(', '7', '×', '10', ')', '/', '5', '-', '8'])
  });
  test(`strToArray('20+-,3×,4/75-31,8900+1234,45/-0,3') returns 
    ['0', '+', '-1', '×', '(', '7', '×', '10', ')', '/', '5', '-', '8']`, () => {
    expect(strToArray('20+-,3×,4/75-31,8900+1234,45/-0,3')).toEqual(
      ['20', '+', '-.3', '×', '.4', '/', '75', '-', '31.8900', '+', '1234.45', '/', '-0.3'])
  });

})

describe("calcInside works correctly", () => {
	test("calcInside(['1']) returns 1", () => {
    expect(calcInside(['1'])).toEqual('1')
  });
	test("calcInside(['12']) returns 12", () => {
    expect(calcInside(['12'])).toEqual('12')
  });
	test("calcInside(['123456']) returns 123456", () => {
    expect(calcInside(['123456'])).toEqual('123456')
  });
	test("calcInside(['-20']) returns -20", () => {
    expect(calcInside(['-20'])).toEqual('-20')
  });
	test("calcInside(['20', '+', '10']) returns 30", () => {
    expect(calcInside(['20', '+', '10'])).toEqual('30')
  });
	test("calcInside(['20', '-', '10']) returns 10", () => {
    expect(calcInside(['20', '-', '10'])).toEqual('10')
  });
	test("calcInside(['20', '×', '10']) returns 200", () => {
    expect(calcInside(['20', '×', '10'])).toEqual('200')
  });
	test("calcInside(['20', '/', '10']) returns 2", () => {
    expect(calcInside(['20', '/', '10'])).toEqual('2')
  });
	test("calcInside(['20', '+', '-10']) returns 10", () => {
    expect(calcInside(['20', '+', '-10'])).toEqual('10')
  });
	test("calcInside(['20', '×', '-10']) returns -200", () => {
    expect(calcInside(['20', '×', '-10'])).toEqual('-200')
  });
	test("calcInside(['20', '/', '-10']) returns -2", () => {
    expect(calcInside(['20', '/', '-10'])).toEqual('-2')
  });
})

describe("calcResult works correctly", () => {
  test("calcResult('(10)') returns 10", () => {
    expect(calcResult('(10)')).toEqual('10')
  });
	test("calcResult('20-(10)') returns 10", () => {
    expect(calcResult('20-(10)')).toEqual('10')
  });
	test("calcResult('-10') returns -10", () => {
    expect(calcResult('-10')).toEqual('-10')
  });
	test("calcResult('20+-(10)') returns 10", () => {
    expect(calcResult('20+-(10)')).toEqual('10')
  });
	test("calcResult('0+-(7×10)/5-8') returns -22", () => {
    expect(calcResult('0+-(7×10)/5-8')).toEqual('-22')
  });
  test("calcResult('(10') returns Error", () => {
    expect(calcResult('(10')).toEqual('Error')
  });
})

describe("checkParentheses works correctly", () => {
  test("checkParentheses('(10)')) returns true", () => {
    expect(checkParentheses('(10)')).toEqual(true)
  });
  test("checkParentheses('(10')) returns false", () => {
    expect(checkParentheses('(10')).toEqual(false)
  });
})
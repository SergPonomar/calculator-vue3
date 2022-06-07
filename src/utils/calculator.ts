function multiDivide(arr: string[]): string[] {
	for (let i=1; i < arr.length-1; i++) {
		if (arr[i] === '×' || arr[i] === '/') {
			const res: number = arr[i] === '×'? 
				Number(arr[i-1]) * Number(arr[i+1]) : Number(arr[i-1]) / Number(arr[i+1])
			arr.splice(i-1, 3, res.toString())
			i=i-2	
		}
	}
	return arr
}

function sumSubtract(arr: string[]): string[] {
	for (let i=1; i < arr.length-1; i++) {
		if (arr[i] === '+' || arr[i] === '-') {
			const res: number = arr[i] === '+'? 
				Number(arr[i-1]) + Number(arr[i+1]) : Number(arr[i-1]) - Number(arr[i+1])
			arr.splice(i-1, 3, res.toString())
			i=i-2	
		}
	}
	return arr
}

function calcInside(arr: string[]): string {
	if (arr.length === 1) {
		return Number(arr[0]).toString()
  }
  multiDivide(arr)
  sumSubtract(arr)
	return arr[0]
}

function strToArray(str: string): RegExpMatchArray | string[] {
	return str.replace(/((?<=[×+/])|\B)-(?=\()/g, '-1×')
						.replace(/,/g, '.')
						.match(/(?<!e)[×+/()]|(?<=[^×+/(])-|(-?(\d*\.\d+|\d+)(e[+-]\d+)?)/g) || [str]
}

function checkParentheses(str: string): boolean {
	return (str.match(/\(/g)?.length || 0) ===
		(str.match(/\)/g)?.length || 0)
}

function limitLength(str: string): string {
	return str.length >= 14? Number(str).toPrecision(5): str
}

function calcResult(str: string): string {
	if (!checkParentheses(str)) return 'Error'	
	const argArray: string[] = strToArray(str)
	
	//calc inside parentheses
	for (let i=argArray.length - 1; i >= 0; i--) {
		if (argArray[i] === '(') {

			for (let j=i; j < argArray.length; j++) {
				if (argArray[j] === ')') {
					const res = calcInside(argArray.slice(i+1, j))
					argArray.splice(i, j-i+1, res)
					break
				}
			}
		}
	}
	return limitLength(calcInside(argArray)).replace(/\./g, ',')
}

export {calcInside, calcResult, checkParentheses, multiDivide, strToArray, sumSubtract}
import {calcResult} from './calculator'

const digits: string[] = ['1','2','3','4','5','6','7','8','9']
const nulls: string[] = ['0','00']
const operators: string[] = ['+','/','×']

function inputHandler(input: string, display1: string, display2: string): string[] {

	if (display2 === 'Error') {
		display1 = ''
		display2 = '0'
	}

	if (input === '=' && /[\d)]$/.test(display1)) {
		return [display1.concat(input), calcResult(display1)]
	}

	if (input === 'C') {
		return ['', '0']
	}

	if (display1.length >= 25 && !/=$/.test(display1)) return [display1, display2]

	if (/=$/.test(display1)) display1 = display2
	const disp1Changed = [display1.concat(input), display2]

	if (digits.includes(input) && !/\)$/.test(display1)) {
		return disp1Changed
	}
	if (nulls.includes(input) && !/\)$|[-×+/√]0$|^0$/.test(display1)) {
		if (/[-×+/√]$|^$/.test(display1)) return [display1.concat('0'), display2]
		return disp1Changed
	}
	if (operators.includes(input) && /[\d)]$/.test(display1)) {
		return disp1Changed
	}
	if (input === ',' && !/[),]$/.test(display1)) {
		return disp1Changed
	}
	if (input === '-' && /[\d×+/()]$|^$/.test(display1)) {
		return disp1Changed
	}
	if (input === '(' && !/[\d,]$/.test(display1)) {
		return disp1Changed
	}
	if (input === ')' && /[\d)]$/.test(display1) &&
		(display1.match(/\(/g)?.length || 0) >
		(display1.match(/\)/g)?.length || 0)) {
		return disp1Changed
	}
	if (input === '√' && !/[√%,\d)]$/.test(display1)) {
		return disp1Changed
	}
	if (input === '%' && /[\d)]$/.test(display1)) {
		return disp1Changed
	}

	return [display1, display2]
}

export default inputHandler
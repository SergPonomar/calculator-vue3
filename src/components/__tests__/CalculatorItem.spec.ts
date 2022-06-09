import {render} from '@testing-library/vue'
import {expect} from 'vitest'
import userEvent from '@testing-library/user-event'

import CalculatorItem from '../CalculatorItem.vue'

const user = userEvent.setup()

test('CalculatorItem displays expression when click on button', async () => {
  const {getByRole, getByLabelText} = render(CalculatorItem)
  const controls: string[] = ['√','0','%','1','+','2','-','3','×','4','/','5',',','6','7','8','9','00','=']

  const dispExp = getByLabelText("expression")

  for (const button of controls) {
    await user.click(getByRole('button', {name: button}))
    expect(dispExp.textContent).toContain(button)
  }

  await user.click(getByRole('button', {name: 'C'}))
  expect(dispExp.textContent).toBe('')
})

test('CalculatorItem displays expression when press keyboard', async () => {
  const {getByLabelText} = render(CalculatorItem)
  const input = 's0%1+2-3*(4)/5,6789{Enter}'
  const output = '√0%1+2-3×(4)/5,6789='
  const dispExp = getByLabelText("expression")

  await user.keyboard(input)  
  expect(dispExp.textContent).toBe(output)

  await user.keyboard('c')  
  expect(dispExp.textContent).toBe('')
})

test('CalculatorItem display result', async () => {
  const {getByRole, getByLabelText} = render(CalculatorItem)
  const dispRes = getByLabelText("result")

  expect(dispRes.textContent).toBe('0')
  
  await user.click(getByRole('button', {name: '5'}))
  await user.click(getByRole('button', {name: '='}))

  expect(dispRes.textContent).toBe('5')

  await user.click(getByRole('button', {name: 'C'}))
  expect(dispRes.textContent).toBe('0')
})
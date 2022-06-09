import {render} from '@testing-library/vue'
import {expect} from 'vitest'

import ButtonsBlock from '../ButtonsBlock.vue'

test('ButtonsBlock renders all buttons', () => {
  const controls: string[] = ['C','√','%','/',
                '7','8','9','×',
                '4','5','6','-',
                '1','2','3','+',
                '00','0',',','=']
  const {getByText, getAllByRole} = render(ButtonsBlock)
  controls.forEach(button => getByText(button))
  expect(getAllByRole("button").length).toBe(20)
})
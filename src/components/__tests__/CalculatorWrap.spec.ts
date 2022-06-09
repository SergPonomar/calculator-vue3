import {render} from '@testing-library/vue'
import {expect} from 'vitest'

import CalculatorWrap from '../CalculatorWrap.vue'
import ButtonsBlock from '../ButtonsBlock.vue'
import DisplayExpression from '../DisplayExpression.vue'
import DisplayResult from '../DisplayResult.vue'
import SeparatorItem from '../SeparatorItem.vue'

test('CalculatorWrap renders', () => {
  const {getAllByRole, getByLabelText, getByRole} = render(CalculatorWrap, {
    slots: {
      displays: [DisplayExpression, DisplayResult, SeparatorItem],
      buttons: ButtonsBlock,
    },
  })
  //check slots renders
  getByLabelText("expression")
  getByLabelText("result")
  getByRole("separator")
  expect(getAllByRole("button").length).toBe(20)
})
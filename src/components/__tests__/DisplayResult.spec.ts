import {render} from '@testing-library/vue'
import {expect} from 'vitest'

import DisplayResult from '../DisplayResult.vue'

test('DisplayResult renders', () => {
  const {getByLabelText} = render(DisplayResult)
  const display = getByLabelText("result")
  expect(display.textContent).toBe("0")
})
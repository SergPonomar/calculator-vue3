import {render} from '@testing-library/vue'

import DisplayExpression from '../DisplayExpression.vue'

test('DisplayExpression renders', () => {
  const {getByLabelText} = render(DisplayExpression)
  getByLabelText("expression")
})
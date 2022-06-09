import {render} from '@testing-library/vue'

import SeparatorItem from '../SeparatorItem.vue'

test('SeparatorItem renders', () => {
  const {getByRole} = render(SeparatorItem)
  getByRole("separator")
})
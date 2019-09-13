import React from 'react'
import { storiesOf } from '@storybook/react'

import SortTabs from './SortTabs'

const data = [{
  id: 1,
  title: 'Самый дешевый'
}, {
  id: 2,
  title: 'Самый быстрый'
}]

storiesOf('SortTabs', module)
  .add('default', () => <SortTabs data={data} />)

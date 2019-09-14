import React from 'react'
import { storiesOf } from '@storybook/react'

import SortTabs from './SortTabs'
import data from '../../data/sortTabs.json'

storiesOf('SortTabs', module)
  .add('default', () => <SortTabs data={data} />)

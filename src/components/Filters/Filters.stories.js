import React from 'react'
import { storiesOf } from '@storybook/react'

import Filters from './Filters'
import data from '../../data/filters.json'

storiesOf('Filters', module)
  .add('default', () => <Filters title="Количество пересадок" data={data} />)

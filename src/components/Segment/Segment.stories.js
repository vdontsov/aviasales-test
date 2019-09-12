import React from 'react'
import { storiesOf } from '@storybook/react'

import Segment from './Segment'
import ticket from '../../data/ticket.json'

const segment = ticket.segments[0]

storiesOf('Segment', module)
  .add('default', () => <Segment data={segment} />)

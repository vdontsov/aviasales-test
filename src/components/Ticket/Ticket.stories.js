import React from 'react'
import { storiesOf } from '@storybook/react'

import Ticket from './Ticket'
import data from '../../data/ticket.json'

storiesOf('Ticket', module)
  .add('default', () => <Ticket data={data} />)

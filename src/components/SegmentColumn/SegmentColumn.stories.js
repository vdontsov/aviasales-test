import React from 'react'
import { storiesOf } from '@storybook/react'

import SegmentColumn from './SegmentColumn'

storiesOf('SegmentColumn', module)
  .add('default', () => <SegmentColumn head="MOW - HKT" text="10:45 - 08:00" />)

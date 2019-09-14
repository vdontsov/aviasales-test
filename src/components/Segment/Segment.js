import React from 'react'
import { SegmentPropTypes, getHHmm, addMinutes, convertMinsToHrsMins, pluralize } from '../../utils'
import SegmentColumn from '../SegmentColumn'
import styles from './Segment.module.scss'

const Segment = ({ data }) => {
  const { origin, destination, stops=[], date, duration } = data

  const numberOfStops = stops.length
  const startDate = new Date(date)
  const startTime = getHHmm(startDate)
  const endDate = addMinutes(startDate, duration)
  const endTime = getHHmm(endDate)
  const convertedDuration = convertMinsToHrsMins(duration)
  const stopsTitle = pluralize(numberOfStops, ['пересадка', 'пересадки', 'пересадок'])
  const joinedStops = stops.join(', ')

  return (
    <div className={styles.segment}>
      <SegmentColumn
        head={`${origin} - ${destination}`}
        text={`${startTime} - ${endTime}`}
      />
      <SegmentColumn
        head="В пути"
        text={convertedDuration}
      />
      <SegmentColumn
        head={`${numberOfStops} ${stopsTitle}`}
        text={joinedStops || 'Прямой'}
      />
    </div>
  )
}

Segment.defaultProps = {
  data: {},
}

Segment.propTypes = {
  data: SegmentPropTypes,
}

export default Segment

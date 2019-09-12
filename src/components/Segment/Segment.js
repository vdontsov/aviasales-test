import React from 'react'
import { SegmentPropTypes } from '../../utils/PropTypesValues'
import SegmentColumn from '../SegmentColumn'
import styles from './Segment.module.scss'

const getHHmm = date => date.toTimeString().slice(0,5)
const addMinutes = (date, minutes) => new Date(date.getTime() + minutes*60000)

const Segment = ({ data }) => {
  const { origin, destination, stops=[], date, duration } = data
  const numberOfStops = stops.length

  const startDate = new Date(date)
  const startTime = getHHmm(startDate)
  const endDate = addMinutes(startDate, duration)
  const endTime = getHHmm(endDate)

  return (
    <div className={styles.segment}>
      <SegmentColumn
        head={`${origin} - ${destination}`}
        text={`${startTime} - ${endTime}`} />
      <SegmentColumn head="В пути" />
      <SegmentColumn head={`${numberOfStops} Пересадки`} />
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

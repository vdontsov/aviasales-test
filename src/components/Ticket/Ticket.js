import React from 'react'
import { TicketPropTypes } from '../../utils/PropTypesValues'
import Card from '../Card'
import Segment from '../Segment'
import styles from './Ticket.module.scss'

const Ticket = ({ data }) => {
  const CDN = 'http://pics.avs.io/99/36/'
  const imgSrc = `${CDN}${data.carrier}.png`
  const imgSrcSet = `${CDN}${data.carrier}@2x.png`
  const price = data.price && `${data.price.toLocaleString('ru-RU')} P`
  const segments = data.segments && data.segments.map((s, i) => <Segment key={i} data={s} />)

  return (
    <Card>
      <div className={styles.ticketHeader}>
        <div className={styles.ticketPrice}>{price}</div>
        <img alt={data.carrier} width="99" height="36" src={imgSrc} srcSet={imgSrcSet} />
      </div>
      {segments}
    </Card>
  )
}

Ticket.defaultProps = {
  data: {},
}

Ticket.propTypes = {
  data: TicketPropTypes,
}

export default Ticket

import PropTypes from 'prop-types'

export const SegmentPropTypes = PropTypes.shape({
  origin: PropTypes.string,
  destination: PropTypes.string,
  date: PropTypes.string,
  stops: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.number,
})

export const TicketPropTypes = PropTypes.shape({
  price: PropTypes.number,
  carrier: PropTypes.string,
  segments: PropTypes.arrayOf(SegmentPropTypes),
  duration: PropTypes.number,
})

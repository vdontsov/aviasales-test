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

export const SortTabsPropTypes = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.string.isRequired,
}))

export const FiltersPropTypes = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool,
}))

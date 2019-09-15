const CHEAPEST = 'cheapest'
const FASTEST = 'fastest'

const getTotalDuration = (ticket={}) => {
  const { segments=[] } = ticket

  const duration1 = (segments[0] && segments[0].duration) || 0
  const duration2 = (segments[1] && segments[1].duration) || 0

  return duration1 + duration2
}

export const sort = (sortTabs=[], tickets=[]) => {
  const fastestSortTab = sortTabs.find(t => t.id === FASTEST) || {}
  const cheapestSortTab = sortTabs.find(t => t.id === CHEAPEST) || {}

  if (fastestSortTab.active) {
    return tickets.concat().sort((t1, t2) => getTotalDuration(t1) - getTotalDuration(t2))
  }

  if (cheapestSortTab.active) {
    return tickets.concat().sort((t1, t2) => parseFloat(t1.price) - parseFloat(t2.price))
  }
}

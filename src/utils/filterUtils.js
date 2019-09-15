const ALL = 'all'

export const isAllFilter = id => id === ALL

export const getAllFilterObj = (filters=[]) => filters.find(f => f.id === ALL)

export const checkedEveryFilterExceptAll = (filters=[]) => {
  const notCheckedFilters = filters.filter(f => !f.checked)
  return notCheckedFilters.length === 1 && isAllFilter(notCheckedFilters[0].id)
}

const reduceFilters = filters => filters.reduce((result, f) => {
  if (!isAllFilter(f.id) && f.checked) {
    result.push(parseInt(f.id))
  }

  return result
}, [])

const getStopsFromSegments = (segments=[]) => {
  const result = []

  if (segments[0]) result.push(segments[0].stops.length)
  if (segments[1]) result.push(segments[1].stops.length)

  return result
}

const memoizeFilter = () => {
  let cache = {}

  return (filters=[], tickets=[]) => {
    const key = filters.map(f => `${f.id}_${f.checked}`).join('_')

    if (cache[key]) return cache[key]

    const allFilter = getAllFilterObj(filters) || {}

    if (allFilter.checked) {
      cache[key] = tickets
      return tickets
    } else {
      const numberOfStops = reduceFilters(filters)
      const filteredTickets = tickets.filter(
        t => getStopsFromSegments(t.segments).every(s => numberOfStops.includes(s))
      )

      cache[key] = filteredTickets
      return filteredTickets
    }
  }
}

export const filter = memoizeFilter()

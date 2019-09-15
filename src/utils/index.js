export * from './PropTypesValues'
export * from './TimeUtils'
export * from './filterUtils'

export const pluralize = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5 ) ? number % 10 : 5]]
}

export const pollTickets = (promiseFactory, interval=100) => {
  let data = []

  const checkCondition = (resolve, reject) => {
    promiseFactory().then(res => {
      data = data.concat(res.data.tickets)

      if (res.data.stop) {
        resolve(data)
      } else {
        setTimeout(checkCondition, interval, resolve, reject)
      }
    }).catch(() => {
      setTimeout(checkCondition, interval, resolve, reject)
    })
  }

  return new Promise(checkCondition)
}

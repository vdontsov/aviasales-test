export * from './PropTypesValues'
export * from './TimeUtils'

export const pluralize = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5 ) ? number % 10 : 5]]
}

export const continuousPromise = (promiseFactory, interval)  => {
  let stop = false

  const execute = () => promiseFactory().then(res => {

  }).catch(err => {

  }).finally(() => !stop && waitAndExecute());

  const waitAndExecute = () => window.setTimeout(execute, interval);

  execute();
}

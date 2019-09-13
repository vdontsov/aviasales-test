export const getHHmm = date => date.toTimeString().slice(0,5)

export const addMinutes = (date, minutes) => new Date(date.getTime() + minutes*60000)

export const convertMinsToHrsMins = minutes => {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  return `${h}ч ${m}м`;
}

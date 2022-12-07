/* eslint-disable indent */
import add from 'date-fns/add'
import format from 'date-fns/format'

const getformatPrice = (price) =>
  `${price.toLocaleString('ru-RU', {
    style: 'decimal',
    currency: 'RUB',
  })} Р`

const getTimeOnFly = (date, seconds) => {
  const result = add(new Date(date), {
    seconds,
  })
  return `${format(new Date(date), 'HH:mm')} - ${format(new Date(result), 'HH:mm')}`
}

const getBoardingTime = (seconds) => {
  const hours = (seconds / 3600) ^ 0
  const minutes = ((seconds - hours * 3600) / 60) ^ 0
  return `${hours === 0 ? '' : hours < 10 ? '0' + hours + 'ч' : hours + 'ч'} ${
    minutes === 0 ? '' : minutes < 10 ? '0' + minutes + ' м' : minutes + ' м'
  }`
}

const getFormatTransfer = (length) => {
  switch (length) {
    case 0:
      return 'Прямой'
    case 1:
      return '1 пересадка'
    case 2:
      return '2 пересадки'
    case 3:
      return '3 пересадки'

    default:
      return length
  }
}
export { getformatPrice, getTimeOnFly, getBoardingTime, getFormatTransfer }

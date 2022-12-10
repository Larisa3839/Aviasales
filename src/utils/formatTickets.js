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

const getBoardingTime = (minutes) => {
  const hours = (minutes / 60) ^ 0
  const remainingMinutes = minutes - hours * 60
  return `${hours === 0 ? '' : hours < 10 ? '0' + hours + 'ч' : hours + 'ч'} ${
    remainingMinutes === 0 ? '' : remainingMinutes < 10 ? '0' + remainingMinutes + ' м' : remainingMinutes + ' м'
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

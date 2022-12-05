const initialStateFilters = {
  data: [
    { id: 1, text: 'Все', isChecked: false },
    { id: 2, text: 'Без пересадок', isChecked: false },
    { id: 3, text: '1 пересадка', isChecked: false },
    { id: 4, text: '2 пересадки', isChecked: false },
    { id: 5, text: '3 пересадки', isChecked: false },
  ],
}

const initialStateTabs = {
  data: [
    {
      id: 1,
      text: 'Самый дешевый',
      isActive: true,
    },
    {
      id: 2,
      text: 'Самый быстрый',
      isActive: false,
    },
    {
      id: 3,
      text: 'Оптимальный',
      isActive: false,
    },
  ],
}

export { initialStateFilters, initialStateTabs }

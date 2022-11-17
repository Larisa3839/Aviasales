import './Filters.scss'

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters-item">
        <div className="filters-item__title">Количество пересадок</div>
        <ul className="filters-item__list">
          <li className="filters-item__list__item">
            <input type="checkbox" className="custom-checkbox" id="1" />
            <label htmlFor="1">Все</label>
          </li>
          <li className="filters-item__list__item">
            <input type="checkbox" className="custom-checkbox" id="2" />
            <label htmlFor="2">Без пересадок</label>
          </li>
          <li className="filters-item__list__item">
            <input type="checkbox" className="custom-checkbox" id="3" />
            <label htmlFor="3">1 пересадка</label>
          </li>
          <li className="filters-item__list__item">
            <input type="checkbox" className="custom-checkbox" id="4" />
            <label htmlFor="4">2 пересадки</label>
          </li>
          <li className="filters-item__list__item">
            <input type="checkbox" className="custom-checkbox" id="5" />
            <label htmlFor="5">3 пересадки</label>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Filters

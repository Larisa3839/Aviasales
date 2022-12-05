import { connect } from 'react-redux'

import { toggleFilter } from '../../redux/actions'
import './Filters.scss'

const Filters = ({ data, onChangeFilter }) => {
  const filters = data.map((item) => {
    return (
      <li key={item.id} className="filters-item__list__item">
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={item.isChecked}
          id={item.id}
          onChange={() => onChangeFilter(item.id)}
        />
        <label htmlFor={item.id}>{item.text}</label>
      </li>
    )
  })
  return (
    <div className="filters">
      <div className="filters-item">
        <div className="filters-item__title">Количество пересадок</div>
        <ul className="filters-item__list">{filters}</ul>
      </div>
    </div>
  )
}

const mapStateToProps = (store) => ({ data: store.filtersReducer.data })
const mapDispatchToProps = (dispatch) => ({ onChangeFilter: (value) => dispatch(toggleFilter(value)) })
export default connect(mapStateToProps, mapDispatchToProps)(Filters)

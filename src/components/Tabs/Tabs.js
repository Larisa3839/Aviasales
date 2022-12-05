import { connect } from 'react-redux'

import { setVisibilityTab } from '../../redux/actions'
import './Tabs.scss'

const Tabs = ({ data, onChangeTab }) => {
  const tabButtons = data.map((tab) => {
    return (
      <button
        key={tab.id}
        className={`sort-tabs__item ${tab.isActive ? 'active' : ''}`}
        onClick={() => onChangeTab(tab.id)}
      >
        {tab.text}
      </button>
    )
  })
  return <div className="sort-tabs">{tabButtons}</div>
}

const mapStateToProps = (store) => ({ data: store.tabsReducer.data })
const mapDispatchToProps = (dispatch) => ({ onChangeTab: (value) => dispatch(setVisibilityTab(value)) })
export default connect(mapStateToProps, mapDispatchToProps)(Tabs)

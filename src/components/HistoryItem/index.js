import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = historyDetails
  const onDeleteItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history">
      <p className="time-stamp">{timeAccessed}</p>
      <div className="domain-details-container">
        <div className="domain-details">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onDeleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem

import './index.css'

const PasswordsItem = props => {
  const {passList, showPwd, deletepassItem} = props
  const {id, website, username, password} = passList

  const Letter = website.slice(0, 1).toUpperCase()

  const stars =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
  const Delete =
    'https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'

  return (
    <li className="pass-list">
      <p className="first-letter">{Letter}</p>
      <div className="domain-container">
        <p className="domain">{website}</p>
        <p className="username">{username}</p>
        {showPwd ? (
          <p className="username">{password}</p>
        ) : (
          <img src={stars} alt="stars" className="stars" />
        )}
      </div>
      <button
        type="button"
        className="del-button"
        onClick={() => deletepassItem(id)}
        data-testid="delete"
      >
        <img src={Delete} alt="delete" className="delete-image" />
      </button>
    </li>
  )
}
export default PasswordsItem

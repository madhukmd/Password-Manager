import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordsItem from '../PasswordsItem'

import './index.css'

const appLogo =
  'https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'
const SmallPm =
  'https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
const largePm =
  'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
const websiteIcon =
  'https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'
const usernameIcon =
  'https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'
const passwordIcon =
  'https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'
const search =
  'https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'
const nopasswordImg =
  'https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'

class Passwords extends Component {
  state = {
    initialList: [],
    website: '',
    username: '',
    password: '',
    showPwd: false,
    passwords: false,
    searchInput: '',
  }

  addPassword = event => {
    const {website, username, password} = this.state
    event.preventDefault()

    const addPasswordItem = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      initialList: [...prevState.initialList, addPasswordItem],
      website: '',
      username: '',
      password: '',
      passwords: true,
    }))
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  showPasswords = event => {
    if (event.target.checked) {
      this.setState({showPwd: true})
    } else {
      this.setState({showPwd: false})
    }
  }

  deletepassItem = id => {
    this.setState(prevState => ({
      initialList: prevState.initialList.filter(eachItem => eachItem.id !== id),
    }))
  }

  render() {
    const {
      initialList,
      website,
      username,
      password,
      showPwd,
      passwords,
      searchInput,
    } = this.state

    const filterList = initialList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = filterList.length

    return (
      <div className="bg-container">
        <div className="container">
          <img src={appLogo} alt="app logo" className="app-log" />
          <div className="form-container">
            <img src={SmallPm} alt="password manager" className="form-image" />
            <form className="form-input-container" onSubmit={this.addPassword}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="input-style">
                <img src={websiteIcon} alt="website" className="icon" />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter Website"
                  onChange={this.changeWebsite}
                  value={website}
                />
              </div>
              <div className="input-style">
                <img src={usernameIcon} alt="username" className="icon" />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter Username"
                  onChange={this.changeUsername}
                  value={username}
                />
              </div>
              <div className="input-style">
                <img src={passwordIcon} alt="password" className="icon" />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Enter Password"
                  onChange={this.changePassword}
                  value={password}
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src={largePm}
              alt="password manager"
              className="form-image-lg"
            />
          </div>
          <div className="second-container">
            <div className="password-container">
              <div className="password-header">
                <div className="your-pass-container">
                  <h1 className="pass-heading">Your Passwords</h1>
                  <p className="pass-des">{count}</p>
                </div>
                <div className="pass-input-style">
                  <img src={search} alt="search" className="pass-icon" />
                  <input
                    type="search"
                    className="form-input pass"
                    onChange={this.onSearchInput}
                  />
                </div>
              </div>
              <hr />
              <div className="show-passwords-container">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  onChange={this.showPasswords}
                />
                <label htmlFor="checkbox" className="password-label">
                  Show Passwords
                </label>
              </div>

              {!passwords && (
                <div className="no-password-container">
                  <img
                    src={nopasswordImg}
                    className="pass-form-img"
                    alt="no passwords"
                  />
                  <p className="no-passwords">No Passwords</p>
                </div>
              )}

              {passwords && (
                <ul className="passwords-add-container">
                  {filterList.map(eachItem => (
                    <PasswordsItem
                      passList={eachItem}
                      key={eachItem.id}
                      showPwd={showPwd}
                      deletepassItem={this.deletepassItem}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords

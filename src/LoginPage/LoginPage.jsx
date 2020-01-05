import React from 'react'

import Login from '../Login'

class LoginPage extends React.Component {
  state = {
    isShown: false,
  }
  toHideAndShow = () => {
    const { isShown } = this.state
    this.setState({
      isShown: !isShown,
    })
  }
  render() {
    const { isShown } = this.state
    const username = 'Mirror'
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toHideAndShow}>
            {isShown ? 'Hide' : 'Show'}
          </button>
          {isShown && (
            <Login
              message="Hello Please Login!"
              username={username}
              sex="boy"
            />
          )}
        </header>
      </div>
    )
  }
}

export default LoginPage

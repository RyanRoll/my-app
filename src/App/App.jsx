import React from 'react'
import { Tabs } from 'antd'

import LoginPage from '../LoginPage'
import Register from '../Register'

import './styles/App.css'
import 'antd/dist/antd.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Tabs defaultActiveKey="register">
          <Tabs.TabPane tab="Login" key="login">
            <LoginPage />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Register" key="register">
            <Register />
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }
}

export default App

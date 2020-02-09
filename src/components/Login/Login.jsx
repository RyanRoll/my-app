import React from 'react'
import { withRouter } from 'react-router-dom'
import ParticlesBg from 'particles-bg'
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd'
import axios from 'axios'

import styles from './styles/Login.module.scss'

class Login extends React.PureComponent {
  state = {
    isLogging: false,
  }
  login = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (error, values) => {
      if (error) {
        return
      }
      this.setState({
        isLogging: true,
      })
      try {
        // test@gmail.com / 123
        // axios({
        //   method: 'post',
        //   url: '/api/v1/login',
        //   data: values,
        // }).then(response => {
        //   const { history } = this.props
        //   history.push('/')
        // })
        const response = await axios({
          method: 'post',
          url: '/api/v1/login',
          data: values,
        })
        const { history } = this.props
        history.push('/')
      } catch (error) {
        if (error?.response?.data?.success === false) {
          notification.error({
            message: 'Error',
            description: 'Wrong email or password!',
          })
        }
      } finally {
        this.setState({
          isLogging: false,
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { isLogging } = this.state
    return (
      <div className={styles.login}>
        <div className={styles.form}>
          <div className={styles.title}>
            <Icon type="apple" className={styles.logo} />
            <div className={styles.siteLabel}>BuyBuyBuy</div>
          </div>
          <Form onSubmit={this.login} autoComplete="off">
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input your email!',
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Email"
                  autoComplete="new"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                  autoComplete="new"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}

              <Button
                className={styles.btn}
                htmlType="submit"
                loading={isLogging}
                block
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
        <ParticlesBg type="square" bg />
      </div>
    )
  }
}

export default withRouter(Form.create()(Login))

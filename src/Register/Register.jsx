import React from 'react'
import { Form, Input, Tooltip, Icon, Select, Button, notification } from 'antd'

import './styles/Register.css'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

class Register extends React.Component {
  state = {
    data: {
      phoneCode: '886',
    },
  }
  onChange = (name, event) => {
    const value = event?.target ? event?.target?.value : event
    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    })
  }
  onSubmit = () => {
    console.log(this.state)
    notification.success({
      message: 'Success!',
      description: 'Your account has been registered successfully.',
    })
  }
  onClear = () => {
    this.setState({
      data: {
        phoneCode: '886',
      },
    })
  }
  render() {
    const { data } = this.state
    return (
      <div className="register" onSubmit={this.onSubmit}>
        <Form
          {...formItemLayout}
          // labelCol={formItemLayout.labelCol}
          // wrapperCol={formItemLayout.wrapperCol}
        >
          <Form.Item label="E-mail">
            <Input
              value={data.email}
              onChange={this.onChange.bind(this, 'email')}
            />
          </Form.Item>

          <Form.Item label="Password">
            <Input.Password
              value={data.password}
              onChange={this.onChange.bind(this, 'password')}
            />
          </Form.Item>

          <Form.Item label="Confirm Password">
            <Input.Password
              value={data.confirmPassword}
              onChange={this.onChange.bind(this, 'confirmPassword')}
            />
          </Form.Item>

          <Form.Item
            label={
              <span>
                Name&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            <Input
              value={data.name}
              onChange={this.onChange.bind(this, 'name')}
            />
          </Form.Item>

          <Form.Item label="Phone">
            <Input
              addonBefore={
                <Select
                  value={data.phoneCode}
                  style={{ width: 80 }}
                  onChange={this.onChange.bind(this, 'phoneCode')}
                >
                  <Select.Option value="886">+886</Select.Option>
                  <Select.Option value="87">+87</Select.Option>
                </Select>
              }
              value={data.phone}
              onChange={this.onChange.bind(this, 'phone')}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <Button type="default" onClick={this.onClear}>
            Clear
          </Button>
        </Form>
      </div>
    )
  }
}

export default Register

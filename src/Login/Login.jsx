import React from 'react'

class Login extends React.PureComponent {
  static defaultProps = {
    sex: 'Girl',
  }
  constructor(props) {
    super(props)
    this.foo = 'bar'
  }
  componentDidMount() {
    console.log('did mount')
  }
  componentDidUpdate() {
    console.log('did updateeeeee')
  }
  componentWillUnmount() {
    console.log('Login Bye')
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.email === "abc") {
  //     return false;
  //   }
  //   console.log(nextProps, this.props, nextState, this.state);
  //   return true;
  // }
  state = {
    email: '',
    password: '',
  }
  onEmailChange = event => {
    const { value } = event.target
    this.setState({
      email: value,
    })
  }
  onPasswordChange = event => {
    const { value } = event.target
    this.setState({
      password: value,
    })
  }
  onSubmit = () => {
    const { email, password } = this.state
    console.log(email, password)
  }
  render() {
    const { message, username, sex } = this.props
    const { email, password } = this.state
    return (
      <div>
        <h2>{message}</h2>
        <h4>
          {username} - {sex}
        </h4>
        Email: <input type="input" onChange={this.onEmailChange} />
        <br />
        {email}
        <br />
        <br />
        Password: <input type="password" onChange={this.onPasswordChange} />
        <br />
        {password}
        <br />
        <br />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
}

export default Login

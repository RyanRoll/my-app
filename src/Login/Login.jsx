import React from "react";

class Login extends React.Component {
  static defaultProps = {
    sex: "Girl"
  };
  state = {
    email: "",
    password: ""
  };
  onEmailChange = event => {
    const { value } = event.target;
    this.setState({
      email: value
    });
  };
  onPasswordChange = event => {
    const { value } = event.target;
    this.setState({
      password: value
    });
  };
  onSubmit = () => {
    const { email, password } = this.state;
    console.log(email, password);
  };
  render() {
    const { message, username, sex } = this.props;
    const { email, password } = this.state;
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
    );
  }
}

export default Login;

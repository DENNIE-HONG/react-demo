import React from 'react';
import ComponentHeader from 'coms/layout/header';
import { postLogin } from 'api';
import './login.scss';
class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleSubmit () {
    const sendData = {
      name: this.state.name,
      password: this.state.password
    };
    postLogin(sendData).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
  handleNameChange (event) {
    this.setState({ name: event.target.value });
  }
  handlePasswordChange (event) {
    this.setState({ password: event.target.value });
  }
  render () {
    return (
      <div>
        <ComponentHeader keywords="登录" />
        <form>
          <h1>测试登录</h1>
          <label>
            账号：
            <input name="name" type="text" placeholder="请输入账号" maxLength="20" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            密码：
            <input name="password" type="text" placeholder="请输入密码" maxLength="20" onChange={this.handlePasswordChange} value={this.state.password} />
          </label>
          <div className="btn-primary" onClick={this.handleSubmit}>确定</div>
        </form>
      </div>
    );
  }
}
export default Login;

import React from 'react';
import ComponentHeader from 'coms/layout/header';
import { postLogin } from 'api';
import isLogin from 'utils/islogin';
import Message from 'coms/message';
import './login.scss';
class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: isLogin() || '',
      password: '',
      error: ''
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
    postLogin(sendData).then(() => {
      this.props.history.push('/', null);
    }).catch((err) => {
      this.setState({
        error: err
      });
    });
  }
  handleNameChange (event) {
    this.setState({ name: event.target.value });
  }
  handlePasswordChange (event) {
    this.setState({ password: event.target.value });
  }
  render () {
    let error = null;
    if (this.state.error) {
      error = <Message type="warning" message={this.state.error} />;
    }
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
        {error}
      </div>
    );
  }
}
export default Login;

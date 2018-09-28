import React, { Component } from 'react';
import Header from 'coms/layout/header';
import { postLogin } from 'api';
import isLogin from 'utils/islogin';
import showMessage from 'coms/message';
import Input from 'coms/input';
import CommonHead from 'coms/commonHead';
import showConfirm from 'coms/modal/confirm';
import './login.scss';
class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: isLogin() || '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleSubmit () {
    const self = this;
    const sendData = {
      name: this.state.name,
      password: this.state.password
    };
    showConfirm({
      title: '确定发送数据吗？',
      content: `${sendData.name}`,
      onOk () {
        postLogin(sendData).then(() => {
          self.props.history.push('/', null);
        }).catch((err) => {
          showMessage({
            type: 'error',
            message: err
          });
        });
      }
    });
  }
  handleNameChange (newValue) {
    this.setState({ name: newValue });
  }
  handlePasswordChange (newValue) {
    this.setState({ password: newValue });
  }
  render () {
    return (
      <div className="login">
        <Header keywords="登录" />
        <CommonHead />
        <form>
          <h1>测试登录</h1>
          <label>
            账号：
            <Input placeholder="请输入账号" maxLength="10" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            密码：
            <Input placeholder="请输入密码" maxLength="20" onChange={this.handlePasswordChange} value={this.state.password} />
          </label>
          <div className="btn-primary" onClick={this.handleSubmit}>确定</div>
        </form>
      </div>
    );
  }
}
export default Login;

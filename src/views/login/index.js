import React, { Component } from 'react';
import Header from 'coms/layout/header';
import Footer from 'coms/layout/footer';
import { postLogin } from 'api';
import isLogin from 'utils/islogin';
import showMessage from 'coms/message';
import Input from 'coms/input';
import Radio from 'coms/radio';
import RadioGroup from 'coms/radio/radio-group';
import CheckboxGroup from 'coms/checkbox/checkbox-group';
import Select from 'coms/select';
import CommonHead from 'coms/commonHead';
import Switch from 'coms/switch';
import showModal from 'coms/modal';
import './login.scss';
class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: isLogin() || '',
      password: '',
      gender: 'man',
      food: ['巧克力']
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleFood = this.handleFood.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }
  handleSubmit () {
    const sendData = {
      name: this.state.name,
      password: this.state.password,
      gender: this.state.gender,
      food: this.state.food.toString()
    };
    console.log(sendData);
    showModal({
      title: '发送数据'
    });

    // postLogin(sendData).then(() => {
    //   this.props.history.push('/', null);
    // }).catch((err) => {
    //   showMessage({
    //     type: 'error',
    //     message: err
    //   });
    // });
  }
  handleGender (newValue) {
    this.setState({
      gender: newValue
    });
  }
  handleNameChange (newValue) {
    this.setState({ name: newValue });
  }
  handlePasswordChange (newValue) {
    this.setState({ password: newValue });
  }
  handleFood (selectFoodList) {
    this.setState({
      food: selectFoodList
    });
  }
  handleLike (like) {
    console.log(like);
  }
  render () {
    const plainOptions = ['巧克力', '板栗', '薯条', '奶茶'];
    return (
      <div className="login">
        <Header keywords="登录" />
        <CommonHead />
        <form>
          <h1>测试登录</h1>
          <label>
            账号：
            <Input placeholder="请输入账号" maxLength="20" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            密码：
            <Input placeholder="请输入密码" maxLength="20" onChange={this.handlePasswordChange} value={this.state.password} />
          </label>
          <RadioGroup onChange={this.handleGender} value={this.state.gender}>
            <Radio value="femate" >女</Radio>
            <Radio value="man" >男</Radio>
          </RadioGroup>
          <section>
            喜欢吃啥：
            <CheckboxGroup options={plainOptions} value={this.state.food} onChange={this.handleFood} />
          </section>
          <label>
            谁最帅：
            <Select defaultValue={2} onChange={this.handleLike}>
              <option value={1}>吴亦凡</option>
              <option value={2}>黄景瑜</option>
              <option value={3}>陈伟霆</option>
            </Select>
          </label>
          <section>
            选择标签：
            <Select defaultValue={5} onChange={this.handleLike} mode="multiple" style={{ width: '300px' }}>
              <option value={1}>爱学习</option>
              <option value={2}>不要打扰我学习</option>
              <option value={3}>沉迷学习</option>
              <option value={4}>沉迷学习，不可自拔</option>
              <option value={5}>你们小点声</option>
            </Select>
          </section>
          <section>
            开关：
            <Switch defaultChecked checkedChildren="开" unCheckedChildren="关" />
          </section>
          <div className="btn-primary" onClick={this.handleSubmit}>确定</div>
        </form>
        <Footer />
      </div>
    );
  }
}
export default Login;

import React, { Component } from 'react';
import Header from 'coms/layout/header';
import Footer from 'coms/layout/footer';
import CommonHead from 'coms/commonHead';
import Radio from 'coms/radio';
import RadioGroup from 'coms/radio/radio-group';
import CheckboxGroup from 'coms/checkbox/checkbox-group';
import Select from 'coms/select';
import Switch from 'coms/switch';
import showConfirm from 'coms/modal/confirm';
import Upload from 'coms/upload';
import { uploadImg } from 'api';
import Loading from 'coms/loading';
import isLogin from 'utils/islogin';
import showMessage from 'coms/message';
class Edit extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gender: 'man',
      food: ['巧克力'],
      avatar: '',
      isLoading: true,
      defaultAvatar: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleFood = this.handleFood.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleAvatar = this.handleAvatar.bind(this);
  }
  componentDidMount () {
    if (!isLogin()) {
      this.props.history.push('/login', null);
      return;
    }
    uploadImg().then((res) => {
      const avatar = res.data;
      this.setState({
        defaultAvatar: avatar,
        avatar,
        isLoading: false
      });
    });
  }
  handleGender (newValue) {
    this.setState({
      gender: newValue
    });
  }
  handleFood (selectFoodList) {
    this.setState({
      food: selectFoodList
    });
  }
  handleLike (like) {
    console.log(like);
  }
  handleAvatar (base64Url) {
    this.setState({
      avatar: base64Url
    });
  }
  handleSubmit () {
    const sendData = {
      gender: this.state.gender,
      food: this.state.food.toString(),
      avatar: this.state.avatar
    };
    showConfirm({
      title: '确定发送数据吗？',
      content: `${sendData.gender}, ${sendData.food}`,
      onOk () {
        uploadImg(sendData.avatar).then(() => {
          showMessage({
            type: 'success',
            message: '操作成功！'
          });
          window.location.reload();
        });
      }
    });
  }
  render () {
    const plainOptions = ['巧克力', '板栗', '薯条', '奶茶'];
    const { isLoading } = this.state;
    return (
      <div className="edit">
        <Header keywords="编辑" />
        <CommonHead />
        <div className="content">
          {isLoading ? <Loading /> : (
            <div>
              <section>
                <Upload file={this.state.defaultAvatar} onDone={this.handleAvatar} />
              </section>
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
            </div>)
          }
        </div>
        <Footer />
      </div>
    );
  }
}
export default Edit;

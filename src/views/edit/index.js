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
class Edit extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gender: 'man',
      food: ['巧克力'],
      avatar: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleFood = this.handleFood.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }
  componentDidMount () {
    uploadImg().then((res) => {
      console.log(res);
      const avatar = res.data;
      this.setState({
        avatar
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
  handleSubmit () {
    const sendData = {
      gender: this.state.gender,
      food: this.state.food.toString()
    };
    showConfirm({
      title: '确定发送数据吗？',
      content: `${sendData.gender}, ${sendData.food}`,
      onOk () {
        console.log(sendData);
      }
    });
  }
  render () {
    const plainOptions = ['巧克力', '板栗', '薯条', '奶茶'];
    return (
      <div className="edit">
        <Header keywords="编辑" />
        <CommonHead />
        <div className="content">
          <section>
            <Upload file={this.state.avatar} />
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
        </div>
        <Footer />
      </div>
    );
  }
}
export default Edit;

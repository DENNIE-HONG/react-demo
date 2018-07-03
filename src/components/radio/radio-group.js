import React, { Component } from 'react';
import Radio from './';
class RadioGroup extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: props.value || '',
      name: 'radio'
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }
  onRadioChange (value) {
    const lastValue = this.state.value;
    this.setState({
      value: value
    });
    if (this.props.onChange && value !== lastValue) {
      this.props.onChange(value);
    }
  }
  render () {
    let { children } = this.props;
    children = children.map((item, index) => {
      const name = item.props.name || this.state.name;
      return (
        <Radio key={`${index}-radio`} onChange={this.onRadioChange} value={item.props.value} name={name} checked={this.state.value === item.props.value}>{item.props.children}</Radio>
      );
    });
    return (
      <label value={this.state.value}>
        {children}
      </label>
    );
  }
}
export default RadioGroup;

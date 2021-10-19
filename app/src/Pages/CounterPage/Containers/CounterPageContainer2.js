import React, {Component} from 'react';
import Counter2 from "../Components/Counter/index2";
class CounterPageContainer2 extends Component {
  state = {
      countValue: 0,
      parityType: 'Even Number',
    };

  handleIncrement = () => {
    this.setState((state) => {
      const newValue = state.countValue + 1;

      return {
        countValue: newValue,
      }
    })
  }

  handleDecrement = () => {
    this.setState((state) => {
      const newValue = state.countValue - 1;

      return {
        countValue: newValue,
      }
    })
  }

  handleReset = () => {
    this.setState({countValue: this.state.countValue = 0});
  }



  render() {
    return (
      <Counter2
      countValue={this.state.countValue}
      parityType={this.state.countValue % 2 === 0 ? 'Even Number' : 'Odd Number'}
      handleIncrement={this.handleIncrement}
      handleDecrement={this.handleDecrement}
      handleReset={this.handleReset}
    />
    );
  }
}

export default CounterPageContainer2;
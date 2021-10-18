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
        countValue: newValue
      }
    })
  }

  handleDecrement = () => {
    this.setState((state) => {
      const newValue = state.countValue - 1;

      return {
        countValue: newValue
      }
    })
  }

  handleReset = () => {
    this.setState({countValue: this.state.countValue = 0});
  }

  parity = () => {
    return this.state.countValue % 2 === 0 ? this.state.parityType = 'Even Number' : this.state.parityType = 'Odd Number';
  }

  render() {
    return (
      <Counter2
      countValue={this.state.countValue}
      parityType={this.parity()}
      handleIncrement={this.handleIncrement}
      handleDecrement={this.handleDecrement}
      handleReset={this.handleReset}
    />
    );
  }
}

export default CounterPageContainer2;
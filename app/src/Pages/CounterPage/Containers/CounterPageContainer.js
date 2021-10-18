import React, {Component} from 'react';
import Counter from "../Components/Counter";

class CounterPageContainer extends Component {
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
    if (this.state.countValue >= 1) {  // this.state.countValue > 0
      this.setState((state) => {
        const newValue = state.countValue - 1;

        return {
          countValue: newValue
        }
      })
    }

  }

  handleReset = () => {
    this.setState({countValue: this.state.countValue = 0});
  }

  parity = () => {
    return this.state.countValue % 2 === 0 ? this.state.parityType = 'Even Number' : this.state.parityType = 'Odd Number';
  }

  render() {
    return (
      <Counter
      countValue={this.state.countValue}
      parityType={this.parity()}
      handleIncrement={this.handleIncrement}
      handleDecrement={this.handleDecrement}
      handleReset={this.handleReset}
    />
    );
  }
}

export default CounterPageContainer;
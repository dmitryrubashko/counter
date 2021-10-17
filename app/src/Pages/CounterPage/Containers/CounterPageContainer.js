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
      const newType = newValue % 2 === 0 ? state.parityType = 'Even Number' : state.parityType = 'Odd Number';

      return {
        countValue: newValue,
        parityType: newType,
      }
    })
  }

  handleDecrement = () => {
    this.setState((state) => {
      const newValue = state.countValue - 1 < 0 ? 0: state.countValue - 1;

      const newType = newValue % 2 === 0 ? state.parityType = 'Even Number' : state.parityType = 'Odd Number';

      return {
        countValue: newValue,
        parityType: newType,
      }
    })
  }

  handleHiddenToggle = () => {
    this.setState({...this.state, isHidden: !this.state.isHidden})
  }

  handleReset = () => {
    this.setState({countValue: this.state.countValue = 0, parityType: this.state.parityType = 'Even Number'})
  }

  render() {
    return (
      <Counter
      countValue={this.state.countValue}
      parityType={this.state.parityType}
      handleIncrement={this.handleIncrement}
      handleDecrement={this.handleDecrement}
      handleReset={this.handleReset}
    />
    );
  }
}

export default CounterPageContainer;
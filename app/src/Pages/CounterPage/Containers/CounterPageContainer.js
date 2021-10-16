import React, {Component} from 'react';
import Counter from "../Components/Counter";

class CounterPageContainer extends Component {
  state= {
      countValue: 0,
    };

  handleIncrement = () => {
    this.setState({countValue: this.state.countValue + 1})
  }

  handleDecrement = () => {
    this.setState({countValue: this.state.countValue - 1})
  }

  render() {
    return (
      <Counter
      countValue={this.state.countValue}
      handleIncrement={this.handleIncrement}
      handleDecrement={this.handleDecrement}
    />
    );
  }
}

export default CounterPageContainer;
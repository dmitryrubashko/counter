import React, {Component} from 'react';
import Counter from "../Components/Counter";

class CounterPageContainer extends Component {
  state= {
      countValue: 0,
      isHidden: true,
    };

  handleIncrement = () => {
    this.setState({countValue: this.state.countValue + 1})
  }

  handleDecrement = () => {
    this.setState({countValue: this.state.countValue - 1})
  }

  handleHiddenToggle = () => {
    this.setState({...this.state, isHidden: !this.state.isHidden})
  }

  render() {
    return (
      <Counter
      countValue={this.state.countValue}
      handleIncrement={this.handleIncrement}
      handleDecrement={this.handleDecrement}
      isHidden={this.state.isHidden}
      handleHiddenToggle={this.handleHiddenToggle}
    />
    );
  }
}

export default CounterPageContainer;
import React from "react";
import { connect } from "react-redux";
import { INCREMENT } from "./actions/counter";
import Counter from "./components/counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: Math.random() * 10
    };
  }
  render() {
    return (
      <>
        <h1>App</h1>
        <h3>test: {this.state.test}</h3>
        <h2>Count: {this.props.count}</h2>
        <Counter />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

// const mapDispatchToProps = {
//   // INCREMENT
// };

export default connect(mapStateToProps)(App);

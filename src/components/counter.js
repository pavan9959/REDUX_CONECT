import React from "react";
import { connect } from "react-redux";
import { INCREMENT } from "../actions/counter";
import Count from "./count";

class Counter extends React.Component {
  handleIncrement() {
    this.props.INCREMENT();
  }

  render() {
    return <><button onClick={() =>{ this.handleIncrement();
    console.log(this.props)}}>Increase</button>
    <Count/>
    </> 
  }
}

const mapStateToProps=(state)=>{
    return {state}
}



export default connect(mapStateToProps, { INCREMENT })(Counter);

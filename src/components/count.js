import { connect } from "react-redux"
import { INCREMENT,DEC } from "../actions/counter"
import React from "react";

class Count extends React.Component{

    render(){

        return<><button onClick={()=>{this.props.INCREMENT(10);
       }} >INc</button>
       <button onClick={()=>{this.props.DEC(20);
       }} >DEC</button></> 
    }
}

const mapStateToProps=(state)=>{
    return {
        count:state.count
    }
}

export default connect(mapStateToProps,{INCREMENT,DEC})(Count)
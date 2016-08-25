import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClassDetail extends Component {
    render(){
        if(!this.props.class){
            return <div>Select a class to get started.</div>
        }
        return(
          <div>
              <h3>{this.props.class.class}</h3>
              <p>Class Role: {this.props.class.role}</p>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        class: state.activeClass
    };
}

export default connect(mapStateToProps)(ClassDetail);
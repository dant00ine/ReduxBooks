/**
 * Created by danimagus on 7/28/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectClass } from '../actions/index';
import { bindActionCreators } from 'redux';

class ClassList extends Component {
    renderList(){
        return this.props.classes.map((possibleClass) => {
            return (
                <li
                    onClick={ () => this.props.selectClass(possibleClass)}
                    key={possibleClass.class}
                    className="list-group-item">
                    {possibleClass.class}
                </li>
            )
        })
    };

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    };
}

function mapStateToProps(state) {
    // maps parameter to property
    return {
        classes: state.classes
    };
}


//Anything returned from this function will end up as
//props on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be
    //passed to all reducers
    return bindActionCreators({ selectClass: selectClass }, dispatch)
}


// Promote BookList from a component to container - it needs to
// know about this new dispatch method, selectBook. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(ClassList);
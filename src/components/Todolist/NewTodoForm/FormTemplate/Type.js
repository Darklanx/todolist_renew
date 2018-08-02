import { Button, Collapse, Form, FormGroup, Label, Input } from 'reactstrap'
import React, { Component } from 'react'
import { connect } from 'react-redux'
const style = {
    'margin': '10px',
}
const Type = ({ type, toggleForm }) => {
    return (
        <Button outline color='info' style={style} onClick={
            e => {
                e.preventDefault();
                toggleForm(type)
            }}>
            {type}
        </Button>
    )
}

const TOGGLE_FORM = (formType) => ({
    type: 'toggle_form',
    formType: formType,
})
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleForm: (formType) => {
            dispatch(TOGGLE_FORM(formType))
        }
    }
}
/*
class Type extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
        this.state = {
            style: style,
        }
    }
    render() {
        return (
            <React.Fragment>
                <Button outline color='info' style={this.state.style}
                    onClick={this.toggle}>
                    {this.props.type}
                </Button >
            </React.Fragment>
        );
    }
}
*/




export default connect(null, mapDispatchToProps)(Type)
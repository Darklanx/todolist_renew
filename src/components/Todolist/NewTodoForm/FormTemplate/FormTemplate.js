import InputForm from './InputForm'
import Type from './Type'
import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <Type type="Basic" />
                <Type type="Schedule" />
                <InputForm />
            </React.Fragment >
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, null)(FormTemplate)
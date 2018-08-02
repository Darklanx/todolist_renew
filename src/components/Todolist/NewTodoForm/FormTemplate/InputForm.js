import React, { Component } from 'react'
import { Button, Collapse, Form, FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';



class InputForm extends Component {

    constructor(props) {

        super(props);
        this.renderForm = this.renderForm.bind(this)
        this.selectDate = this.selectDate.bind(this)
        this.state = {
            date: moment(),
        };

    }
    selectDate(newDate) {
        this.setState({ date: newDate })
    }
    renderForm() {
        switch (this.props.formType) {
            case 'Basic':
                return (
                    <Form>
                        <FormGroup>
                            <Label for="name">Name:</Label>
                            <Input id="name" placeholder="name for the todo"></Input>
                        </FormGroup>
                    </Form>
                )

            case 'Schedule':
                return (

                    <Form>
                        <FormGroup>
                            <Label for="name">Name:</Label>
                            <Input id="name" placeholder="name for the todo"></Input>
                        </FormGroup>
                        <Label for="Date">Date:</Label>
                        <FormGroup>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.selectDate}
                            />
                        </FormGroup>
                    </Form>

                )
        }
    }
    render() {

        return (
            <Collapse isOpen={true}>
                {this.renderForm()}
            </Collapse >
        );
    }
}

/*
const InputForm = ({ type }) => {
    switch (type) {
        case 'Basic':
            console.log(type)
            form = basic;
            break;
        case 'Schedule':
            form = schedule;
            break;
        default:
            console.log(type)
    }
    return (
        <Collapse isOpen={true}>
            {form}
        </Collapse >
    );
}
*/


const mapStateToProps = (state, ownProps) => {
    return {
        formType: state.FormTemplate_r.get('formType')
    }
}

export default connect(mapStateToProps, null)(InputForm)

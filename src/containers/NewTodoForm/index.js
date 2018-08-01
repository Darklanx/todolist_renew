import React from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const templateStyle = {
    'display': '-ms-flexbox',
    'msFlexAlign': 'start',
    'alignItems': 'flex-start',
    'msFlexPack': 'justify',
    'justifyContent': 'space-between',
    'padding': '1rem',
    'borderBottom': '1px solid #e9ecef',
    'borderTopLeftRadius': '.3rem',
    'borderTopRightRadius': '.3rem',
}

class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div>
                <Button color="success" style={{
                    'float': 'right'
                }} onClick={this.toggle}> NewTodo
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>New Todo</ModalHeader>
                    <div style={templateStyle}>
                        Type
                    </div>
                    <ModalBody>
                        Form here
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        );
    }
}




const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
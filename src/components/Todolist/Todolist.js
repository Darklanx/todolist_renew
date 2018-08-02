import React from 'react'
import PropTypes from 'prop-types';
//import NewTodoForm from '../../containers/NewTodoForm'
import NewTodoForm from './NewTodoForm/NewTodoForm'
import { connect } from 'react-redux';
//list the todos
const Todolist = ({ todos }) => {
    return (
        <div style={{ 'width': '500px', 'margin': '0 auto' }}>
            <React.Fragment>
                <ul className="list-group">
                    {
                        todos.map((value) => {
                            return (
                                <li className="list-group-item" key={value}>{value}</li>
                            )
                        })
                    }
                </ul>
                <NewTodoForm />
            </React.Fragment >
        </div>
    )

}
Todolist.propTypes = {
    todos: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    todos: state.todolist.todos,
})
const mapDispatchToProps = (dispatch) => ({
})
const VisibleTodolist = connect(
    mapStateToProps,
    null
)(Todolist)

export default VisibleTodolist
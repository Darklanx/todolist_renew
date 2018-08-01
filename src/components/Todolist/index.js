import React from 'react'
import PropTypes from 'prop-types';
import NewTodoForm from '../../containers/NewTodoForm'

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

export default Todolist;
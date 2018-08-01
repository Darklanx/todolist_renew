import { connect } from 'react-redux'
import Todolist from '../../components/Todolist'
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
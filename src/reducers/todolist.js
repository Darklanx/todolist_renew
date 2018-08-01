const initialState = {
    todos: ['a', 'b'],
}
function todolist(state = initialState, action) {
    switch (action.type) {
        case 'new_todo':

            return state
        default:
            return state
    }
}

export default todolist;
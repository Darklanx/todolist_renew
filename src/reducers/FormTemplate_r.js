const { Map } = require('immutable')

var initialState = Map({
    formType: 'a'
})
function FormTemplate_r(state = initialState, action) {
    switch (action.type) {
        case 'toggle_form':
            const newstate = state.set( 'formType', action.formType )
            return newstate
        default:
            return state
    }
}
export default FormTemplate_r;
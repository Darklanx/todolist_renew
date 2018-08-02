import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import VisibleTodolist from './containers/VisibleTodolist'
import Todolist from './components/Todolist/Todolist'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
const store = createStore(reducers)
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {/* <VisibleTodolist /> */}
                <Todolist />
            </Provider>
        );
    }
}

export default App;

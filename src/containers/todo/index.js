import React from 'react';
import { connect } from "react-redux";

import './style.scss'

import { createTodo, removeTodo, toggleTodo } from '../../store/actions'

import Header from '../../components/header'
import Item from '../../components/item'
import InputField from '../../components/input-field'

function App({ toDoList, toggleTodo, createTodo, removeTodo }) {
  return (
    <div className="todo-widget">
        <div className="todo-widget__header">
            <Header removeTodo={removeTodo} />
        </div>
        <div className="todo-widget__body">
            { toDoList.map((item, index) => <Item todo={item} toggleTodo={toggleTodo} index={index} key={index} />) }
        </div>
        <div className="todo-widget__create">
            <InputField createTodo={createTodo} />
        </div>
    </div>

  );
}

const mapStateToProps = state => ({
	toDoList: state.todo.toDoList,
});
const mapDispatchToProps = dispatch => {
	return {
		createTodo: data => {
			dispatch(createTodo(data))
		},
		removeTodo: data => {
			dispatch(removeTodo(data))
        },
		toggleTodo: data => {
			dispatch(toggleTodo(data))
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

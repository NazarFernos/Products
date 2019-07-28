import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, updateItem }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <div key={id} >
                <TodoListItem {...itemProps }
                              id = {id}
                              onDeleted = {() => onDeleted(id)}
                              updateItem = {updateItem}
                />
            </div>

        );
    });

    return (

        <div className = "table">
            <table>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                </tr>
                </thead>
            </table>
            { elements }
        </div>
    );
};

export default TodoList;

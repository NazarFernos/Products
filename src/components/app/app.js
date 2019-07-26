import React, { Component } from 'react';

import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';


import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {
                id: "", 
                label: "",
                price: "",
                description: ""
            }
        ],
        term: ""
    };

    createTodoItem(label, price, description) {
        return {
            label,
            price,
            description,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {

            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            };
        });
    };

    addItem = (text, price, description) => {
        const newItem = this.createTodoItem(text, price, description);

        this.setState(({ todoData }) => {

            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });
    };



    render() {

        const { todoData, term } = this.state;


        return (
            <div className="todo-app">
                <TodoList
                    onDeleted = { this.deleteItem }
                    todos={todoData}/>


                <ItemAddForm addItem = {this.addItem} />
            </div>
        );
    }
};
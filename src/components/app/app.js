import React, { Component } from 'react';

import Table from '../table';
import TableAddRow from '../table-add-row';


import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {
                id: 1,
                label: "",
                price: "",
                description: ""
            }
        ],
        term: ""
    };

    createTodoItem(label, price, description) {
        let todoData = this.state.todoData;
        let lastId = todoData[todoData.length-1].id;
        if (lastId < this.maxId)
            return {
                label,
                price,
                description,
                id: ++lastId
            }

        return false;
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

        if (!newItem) return

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

    updateItem(targetId, inputValues) {
        this.setState(({todoData}) => {
            const targetIndex = todoData.findIndex((element) => element.id === targetId);
            const newTodoData = [...todoData];
            Object.assign(newTodoData[targetIndex], inputValues);
            return newTodoData;
        });
    }

    render() {

        const { todoData, term } = this.state;


        return (
            <div className="todo-app">
                <TableAddRow addItem = {this.addItem} />
                <Table
                    onDeleted = { this.deleteItem }
                    updateItem = { this.updateItem.bind(this) }
                    todos={todoData}/>
            </div>
        );
    }
};
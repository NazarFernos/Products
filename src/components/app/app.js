import React, { Component } from 'react';

import Table from '../table';
import TableAddRow from '../table-add-row';


import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        tableData: [
            {
                id: 1,
                label: "",
                price: "",
                description: ""
            }
        ]
    };

    createTableItem = (label, price, description) => {
        let tableData = this.state.tableData;
        let lastId = tableData[tableData.length-1].id;
        if (lastId < this.maxId)
            return {
                label,
                price,
                description,
                id: ++lastId
            };

        return false;
    };

    deleteItem = (id) => {
        this.setState(({ tableData }) => {

            const idx = tableData.findIndex((el) => el.id === id);

            const newArray = [
                ...tableData.slice(0, idx),
                ...tableData.slice(idx + 1)
            ];
            return {
                tableData: newArray
            };
        });
    };

    addItem = (text, price, description) => {
        const newItem = this.createTableItem(text, price, description);

        if (!newItem) return;

        this.setState(({ tableData }) => {

            const newArr = [
                ...tableData,
                newItem
            ];

            return {
                tableData: newArr
            };
        });
    };

    updateItem = (targetId, inputValues) => {
        this.setState(({tableData}) => {
            const targetIndex = tableData.findIndex((element) => element.id === targetId);
            const newTableData = [...tableData];
            Object.assign(newTableData[targetIndex], inputValues);
            return newTableData;
        });
    };


    render() {

        const { tableData } = this.state;


        return (
            <div className="table-app">
                <TableAddRow addItem = {this.addItem} />

                <Table
                    onDeleted = { this.deleteItem }
                    updateItem = { this.updateItem.bind(this) }
                    tableItems={tableData} />
            </div>
        );
    }
};
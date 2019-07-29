import React from 'react';

import TableItem from '../table-item/table-item';
import './table.css';

const Table = ({ todos, onDeleted, updateItem }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <div key={id} >
                <TableItem {...itemProps }
                              id = {id}
                              onDeleted = {() => onDeleted(id)}
                              updateItem = {updateItem} />
            </div>

        );
    });

    return (

        <div className = "table">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
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

export default Table;
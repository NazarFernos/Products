import React, { Component } from 'react';

import EditRowTable from '../edit-row-table';


import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {

        const { id, label, price, description, onDeleted } = this.props;

        let classNames = "todo-list-item";

        return (
            <span className={classNames}>
                    <table className = "table">
                         <tbody>
                            <tr>
                                <th scope="row">{id}</th>
                                <td>{label}</td>
                                <td>{price}</td>
                                <td>{description}</td>
                                <button type="button"
                                        className="btn btn-outline-danger btn-sm float-right"
                                        onClick={onDeleted}>
                                    <i className="fa fa-trash-o"/>
                                </button>
                                <button className="btn btn-outline-danger btn-sm float-right">
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <EditRowTable />
                            </tr>

                         </tbody>
                    </table>
            </span>
        );
    };
}
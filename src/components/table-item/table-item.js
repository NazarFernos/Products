import React, { Component } from 'react';

import './table-item.css';

export default class TableItem extends Component {

    constructor() {
        super();
        this.state = {
            isEditting: false,
            inputValues: {}
        };
        this.editItem = this.editItem.bind(this)
        this.confirm = this.confirm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.cansel = this.cansel.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value});
    }

    editItem() {
        this.setState({isEditting: true});
    }

    confirm() {
        const id = this.props.id;
        const inputValues = Object.assign({}, this.props, this.state);
        console.log(this.props);
        this.props.updateItem(id, inputValues);
        this.setState({isEditting: false});
    }

    cansel() {
        this.setState({isEditting: false});
    }

    createInput(initialValue, name, placeholder = "") {
        const value = typeof this.state[name] === "undefined" ? initialValue : this.state[name];

        return (
            <input type="text"
                   className="edit-item"
                   onChange={this.handleChange}
                   placeholder={placeholder}
                   value={value}
                   name={name}/>
        );
    }

    createButton(onClick, type) {
        const buttonType = {
            "delete": "fa-trash-o",
            edit: "fa-pencil",
            confirm: "fa-check",
            cancel: "fa-times"
        }

        return (
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onClick}>
                <i className={`fa ${buttonType[type]}`}/>
            </button>
        );
    }

    render() {
        let { id, label, price, description, onDeleted } = this.props;
        let classNames = "table-item";
        let buttons = [];

        if (this.state.isEditting === true) {
            label = this.createInput(label, "label", "Product name");
            price = this.createInput(price, "price", "Price");
            description = this.createInput(description, "description", "Description");

            buttons.push(this.createButton(this.confirm, "confirm"));
            buttons.push(this.createButton(this.cansel, "cancel"));
        } else {
            buttons.push(this.createButton(onDeleted, "delete"));
            buttons.push(this.createButton(this.editItem, "edit"));
        }

        return (
            <span className={classNames}>
                    <table className = "table">
                         <tbody>
                            <tr>
                                <th scope="row">{id}</th>
                                <td>{label}</td>
                                <td>{price}</td>
                                <td>{description}</td>
                                {buttons}
                            </tr>
                         </tbody>
                    </table>
            </span>
        );
    };
}
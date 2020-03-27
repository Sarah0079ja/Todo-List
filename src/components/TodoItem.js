import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: 'blue',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'Line-through' : 'none'
        }
    }


    render() {
        const { index, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.index)} style={{background: "red"}} /> {''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, index)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}
//prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
    background: 'grey',
    color: '#fff',
    border: 'none',
    padding: '5px 12px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'


}



export default TodoItem

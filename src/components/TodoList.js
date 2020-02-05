import React, { Component } from 'react'
import Item from './TodoItem';

export default class TodoList extends Component {
    render() {
        return (
            <section>
                <h2> hello from todolist</h2>
                <Item/>
            </section>
            
        )
    }
}

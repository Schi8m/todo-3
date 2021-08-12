import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'


function List(props) {
    return (
        <ul className="list-ul">
            {props.taskList.map((task, index) =>( 
            <Item 
            task={task} 
            key={index} 
            deleteTask ={props.deleteTask}
            completeTask = {props.completeTask}
            />))}
        </ul>
    )
}

List.propTypes ={
    taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
}
export default List

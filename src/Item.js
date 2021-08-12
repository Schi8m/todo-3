import React from 'react'
import PropTypes from 'prop-types'


function Item(props) {
    let styles=['item-li']
        if(props.task.done){
            styles.push('done')
        }
    return (
        <li className={styles.join(' ')}>
            <span className="item-span">
                <input style={{marginLeft:'1rem'}} type="checkbox" onChange={() => props.completeTask(props.task.id)}/>
                    <strong>{props.task.id}. </strong>
                {props.task.text}
            </span>
            <button className="item-button" onClick={() => props.deleteTask(props.task.id)}>X</button>
        </li>
    )
}

Item.propTypes = {
    task: PropTypes.object.isRequired,
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
}

export default Item

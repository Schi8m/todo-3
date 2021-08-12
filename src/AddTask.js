import React from 'react'
import PropTypes from 'prop-types'


function AddTask(props) {
    const[value, setValue] = React.useState('')
    function submitClicked(event){
        event.preventDefault()
        if(value.trim()){
            props.addTask(value)
            setValue('')
        }
    }
    return (
       <form className="addtask-form" onSubmit={submitClicked}>
           <input className="addtask-input" value={value} onChange={event => setValue(event.target.value) } />
           <button className="addtask-button" type="submit">+</button>
       </form>
    )
}

AddTask.propTypes = {
    addTask: PropTypes.func.isRequired
}

export default AddTask

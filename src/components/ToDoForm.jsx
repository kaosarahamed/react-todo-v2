import { useEffect } from 'react';
import '../App.css';
import PropTypes from "prop-types";

function ToDoForm(props) {

    const {editTodo, input, setInput, tasks, setTasks, setEditToDo} = props
    const id = Math.floor(Math.random() * 100 + 5551);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!editTodo){
            setTasks([
                ...tasks, {id : id, title: input, complete: false}
            ]);
            setInput("");
        }else{
            updateToDO(editTodo.id, input, editTodo.complete);
        }
    }
    
    const updateToDO = (id, title, complete) => {
        const newToDo = tasks.map(item => 
            item.id === id ? {...tasks, id, title, complete} : item
            
        )
        setTasks(newToDo);
        setEditToDo("")
    }

    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title)
        }else{
            setInput("")
        }
    },[editTodo, setInput])

    const handleChange = (e) => {
       setInput(e.target.value) 
    }

    return (
        <div className="formBox">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Enter your task' id='task' name='task' value={input} onChange={handleChange} required/>
              <button type="submit">{editTodo ? "Edit" : "Submit"}</button>
            </form>
          </div>
    )
}

ToDoForm.propTypes = {
    input : PropTypes.any,
    setInput : PropTypes.any,
    tasks : PropTypes.any,
    setTasks : PropTypes.any,
    editTodo : PropTypes.any,
    setEditToDo : PropTypes.any
}

export default ToDoForm

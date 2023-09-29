import '../App.css';
import PropTypes from "prop-types";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
function ToDoList(prop) {

    const {tasks, setTasks, setEditToDo} = prop;

    const updateToDo = (id) => {
        const filterTodo = tasks.find(item => item.id === id);
        setEditToDo(filterTodo)
    }

    const completeToDO = (id) => {
        setTasks(
            tasks.map(item => {
                if(item.id === id){
                    return {...item, complete: true}
                }
                return item
            })
        )
    }

    const deleteToDo = (id) => {
        const filter = tasks.filter(item => item.id !== id);
        setTasks(filter)
    }

    return (
        <div className='toDoLists'>
            <div className='doDoItems'>
              {tasks && tasks.map((item, index) => {
                return(
                  <div className='toDOItem' key={index}>
                <h2 className={item.complete === true ? "todoActive" : "todoInactive"}>{item.title}</h2>
                <span>
                  <FaCheckCircle onClick={() => completeToDO(item.id)}/>
                  <FaEdit onClick={() => updateToDo(item.id)}/>
                  <FaTrash onClick={() => deleteToDo(item.id)}/>
                </span>
              </div>
                )
              })}
            </div>
          </div>
    )
}

ToDoList.propTypes = {
    tasks : PropTypes.any,
    setTasks : PropTypes.any,
    setEditToDo : PropTypes.any
}


export default ToDoList;

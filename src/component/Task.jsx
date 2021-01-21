import { FaTimes } from 'react-icons/fa';
const Task = ({ task, onDelete }) => {
    return (
        <div className="task">
            <h3>{task.text}<FaTimes cursor="pointer" style={{ color: "red" }} onClick={() => onDelete(task.id)}></FaTimes></h3>
            <p>{task.day}</p>
        </div >
    )
}

export default Task

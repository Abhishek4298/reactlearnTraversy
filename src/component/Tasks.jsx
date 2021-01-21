
const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((el) => (
                <h3 key={el.id}>{el.text}</h3>
            ))}
        </>
    )
}

export default Tasks


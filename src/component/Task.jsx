const tasks = [
    {
        id: "1",
        text: "task1 work",
        day: "1st feb",
        reminder: "true"
    }, {
        id: "2",
        text: "task2 work",
        day: "15  feb",
        reminder: "true"
    }, {
        id: "3",
        text: "task3 work",
        day: "30 feb",
        reminder: "true"
    }

]
const Task = () => {
    return (
        <>
            {tasks.map((el) => (
                <h3 key={el.id}>{el.text}</h3>
            ))}
        </>
    )
}

export default Task


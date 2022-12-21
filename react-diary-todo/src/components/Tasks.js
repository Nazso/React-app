// import React from 'react'
import Task from "./Task"

// const tasks = [
//     {
//         id: 1,
//         text: 'Appointment at Doctor',
//         day: '',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Play Bowling',
//         day: '',
//         reminder: false,
//     },
//     {
//         id: 3,
//         text: 'Meeting at Work',
//         day: '',
//         reminder: true,
//     },
//     {
//         id: 4,
//         text: 'Relax',
//         day: '',
//         reminder: true,
//     },
//     {
//         id: 5,
//         text: 'Jogging in tha Park',
//         day: '',
//         reminder: false,
//     },
// ]

const Tasks = ({tasks, onDelete, onToggle}) => {
    

  return (
    <>
      {tasks.map((task) => (
        <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete}
            onToggle={onToggle} /> 
      ))}
    </>
  )
}

export default Tasks

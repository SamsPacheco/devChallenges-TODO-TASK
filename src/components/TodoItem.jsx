import React from 'react'

const TodoItem = ({ dataTodo }) => {
    const {taskName, description, status, iconName} = dataTodo;
    console.log(dataTodo)
    return (
        <li className={`h-20 rounded-xl flex items-center px-4 ${ status === 'In Progress' ? 'bg-Yellow-secondary' : status === 'Completed' ? 'bg-green-seven' : 'bg-red-nine'}`}>
            <figure className='w-14 h-14 p-3 bg-white rounded-xl'>
                { 
                iconName === 'Alarm' ? <img src="./clock_alarm.png" alt='icon-Alarm' /> 
                
                : iconName === 'Task' ? <img src="./notebook.png" alt='icon-notebook' />

                : iconName === 'done' ? <img src="./weight-lifting.png" alt='icon-weight-lifting' />

                : iconName === 'CoffeeCup' ? <img src="./coffee.png" alt='icon-coffee' />

                : iconName === 'texting' ? <img src="./communication.png" alt='icon-communication' />

                : <img src="./programmer.png" alt='icon-programmer' />
                }
            </figure>
            
        </li>
    )
}

export default TodoItem

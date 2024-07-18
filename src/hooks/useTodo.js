import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

let initialState = [
    {
        id: new Date().getTime(),
        taskName: 'Challenge',
        description: 'Terminar este challenge este fin de semana!',
        iconName: 'Alarm', // Alarm , task, done, gym, coffee cup, texting, development 
        status: "In Progress" // tres tipos de estados, In Progress, done or Won't do
    }
]

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState) // queda pendiente el init para el uso del local storage 

    return {

        todos,

    }
}


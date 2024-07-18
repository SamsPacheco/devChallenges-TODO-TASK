
export const todoReducer = ( state = [], action = {}) => {

    switch ( action.type ) {
        
        case "[TODO] Add new task":
            return [...state, action.payload]
        
        case "[TODO] Delete task": // id 
            return state.filter( listTodo => listTodo.id !== action.payload );

        case "[TODO] Done task": // id 
            return state.map( todo => {
                if(todo.id !== todo.payload){
                    return{...todo, done: !todo.done}
                }
            })

    
        default:
            return state;
            break;
    }

    return{

    }
}


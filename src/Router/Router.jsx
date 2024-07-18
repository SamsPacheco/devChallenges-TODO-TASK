
import React from 'react'
import TaskCompleted from '../pages/TaskCompleted'
import { Route } from 'react-router-dom'
import TaskInProgress from '../pages/TaskInProgress'
import TaskWontDo from '../pages/TaskWontDo'

const Router = () => {
    return (
    <>
    
    <Router>
        <Route path='/taskCompleted' element={ <TaskCompleted />} />
        <Route path='/taskInProgress' element={ <TaskInProgress />} />
        <Route path='/taskWontDo' element={ <TaskWontDo />} />
    </Router>
    </>   
    )
}

export default Router

import React from 'react'
import TodoList from './components/TodoList'
import { useTodo } from './hooks/useTodo'
import AddNewTask from './components/AddNewTask'
import { NavLink, useNavigate } from 'react-router-dom'
import Router from './Router/Router'

const TodoApp = () => {

  // const navigate = useNavigate;

  const { todos } = useTodo({
    id: '',
    description: '',
    done: false,
  })
  
  return (
    <>
    <header>
      <nav className='w-[50%] mx-auto py-4'>
        <div className='flex space-x-3 py-4'>
          <img src="./Logo.svg" alt="odo-logo" />
          <h3 className='text-[48px]'>My Task Board</h3>
          <img src="/Edit_duotone.svg" alt="edit" />
        </div>
        <span className='pl-[55px]'>Tasks to keep organised</span>
      </nav>
    </header>

    <main className=' w-[50%] mx-auto py-5'>
    
    {/* tres botones que te llevan a las diferentes vistas donde se visualizaran las tareas segun el status de ellas  */}
      <section className='space-y-5'>

        <div className='cursor-pointer w-full h-[80px] bg-Yellow-secondary rounded-xl flex items-center px-4 space-x-5 relative'>
          <figure className='w-14 h-14 bg-white p-3 rounded-xl'>
            <img src="./clock_alarm.png" alt='icon-Alarm' />
          </figure>
          <h3 className='text-[25px] font-semibold'>Task in Progress</h3>
          <figure className='absolute w-14 h-14 right-3 rounded-xl bg-Orange-four'>
            <img src="Time_atack_duotone.svg" alt="icon-in-progress" className='w-full p-[10px]'/>
          </figure>
        </div>
        
        <div className='cursor-pointer w-full h-[80px] bg-ligth-green-six rounded-xl flex items-center px-4 space-x-5 relative'>
          <figure className='w-14 h-14 bg-white p-3 rounded-xl'>
            <img src="./weight-lifting.png" alt='icon-weight-lifting' />
          </figure>
          <h3 className='text-[25px] font-semibold'>Task Completed</h3>
          <figure className='absolute w-14 h-14 right-3 rounded-xl bg-green-seven'>
            <img src="/Done_round_duotone.svg" alt="icon-Done_round_duotone" className='w-full p-[10px]'/>
          </figure>
        </div>

        <div className='cursor-pointer w-full h-[80px] bg-pink-eight rounded-xl flex items-center px-4 space-x-5 relative'>
          <figure className='w-14 h-14 bg-white p-3 rounded-xl'>
            <img src="./coffee.png" alt='icon-coffee' />
          </figure>
          <h3 className='text-[25px] font-semibold'>Task Won't Do</h3>
          <figure className='absolute w-14 h-14 right-3 rounded-xl bg-red-nine'>
            <img src="/close_ring_duotone.svg" alt="icon-close_ring_duotone" className='w-full p-[10px]'/>
          </figure>
        </div>

        <div className='w-full h-32 bg-light-gray-ten rounded-xl flex items-center px-4 space-x-5 relative'>

          <figure className='w-14 h-14 bg-white p-3 rounded-xl'>
            <img src="./notebook.png" alt='icon-coffee' />
          </figure>
          <div>
            <h3 className='text-[25px] font-semibold'>Task To Do</h3>
            <p className='w-[70%]'>Work on a Challenge on devChallenges.io, leanr typeScript.</p>
          </div>
          
        </div>

        <div className='cursor-pointer w-full h-[80px] bg-Pink-third rounded-xl flex items-center px-4 space-x-5 '>
          <figure className='w-14 h-14 bg-Orange-four rounded-xl flex items-center justify-center p-3'>
            <img src="./Add_round_duotone.svg" alt='icon-Add_round_duotone' className='w-full' />
          </figure>
          <h3 className='text-[20px] font-semibold'>Add new task</h3>
        </div>
        
      
      </section>

    {/* componente para mostrar la lista de los todos */}
    {/* <section className='py-4'>
      <TodoList todos = { todos } />
    </section> */}
    

    </main>

    {/* componente flotante para poder agg un todo  */}
    {/* <section className='absolute w-full top-0 py-2 h-screen flex justify-end pr-2 bg-two-gray-th'>
      <AddNewTask />
    </section> */}
    
    
    </>
  )
}

export default TodoApp

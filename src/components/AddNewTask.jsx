import React from 'react'

const AddNewTask = () => {
  return (
    <>
      <div className='w-[40%] h-max px-5 bg-White-primary rounded-md py-2 relative'>
        <figure className='w-10 h-10 border-2 flex p-[8px] border-gray-ele/35 rounded-[10px] absolute right-3'> <img src="./close_ring_duotone-1.svg" alt="close-logo" /></figure>
        <h4 className='text-2xl'>Task details</h4>
        <form className='my-5'>
          <label className='text-gray-ele'> Task name </label>
          <input type="text" className='w-full border rounded-[5px] mb-4 mt-3 bg-inherit h-8 placeholder:pl-2 focus:outline-none' placeholder='Enter a name'/>

          <label className='text-gray-ele'> Description </label>
          <input type="text" placeholder='Enter a short description' className='bg-inherit mt-3 border rounded-[5px] h-40 w-full placeholder:absolute placeholder:top-4 placeholder:left-3 focus:outline-none'/>
        </form>


        <label className='text-gray-ele'> Icon </label>
        <div className='flex gap-2 mb-4 mt-3'>
          {/* status */}
          <div> <figure className='w-12 bg-light-gray-ten m-[2px] rounded-[14px] cursor-pointer'> <img src="./programmer.png" alt="icon-in-progress" className='w-full p-[5px]'/> </figure></div>
          <div> <figure className='w-12 bg-light-gray-ten m-[2px] rounded-[14px] cursor-pointer'> <img src="./communication.png" alt="icon-done" className='w-full p-[9px]' /> </figure></div>
          <div> <figure className='w-12 bg-light-gray-ten m-[2px] rounded-[14px] cursor-pointer'> <img src="./coffee.png" alt="icon-done" className='w-full p-[9px]'/> </figure></div>
          <div> <figure className='w-12 bg-light-gray-ten m-[2px] rounded-[14px] cursor-pointer'> <img src="./weight-lifting.png" alt="icon-done" className='w-full p-[9px]'/> </figure></div>
          <div> <figure className='w-12 bg-light-gray-ten m-[2px] rounded-[14px] cursor-pointer'> <img src="./notebook.png" alt="icon-done" className='w-full p-[9px]'/> </figure></div>
          <div> <figure className='w-12 bg-light-gray-ten m-[2px] rounded-[14px] cursor-pointer'> <img src="./clock_alarm.png" alt="icon-done" className='w-full p-[9px]'/> </figure></div>



        </div>

        <label className='text-gray-ele'> status </label>
        <div className='grid grid-cols-2 gap-2 mb-4 mt-3'>
          {/* status */}
          <div className='style-buttons'> <figure className='w-12 bg-Orange-four m-[2px] rounded-[14px]'> <img src="Time_atack_duotone.svg" alt="icon-in-progress" className='w-full p-[10px]'/> </figure> <span>In progress</span></div>
          <div className='style-buttons'> <figure className='w-12 bg-green-seven m-[2px] rounded-[14px]'> <img src="./Done_round_duotone.svg" alt="icon-done" className='w-full p-[10px]' /> </figure> <span>Completed</span></div>
          <div className='style-buttons'> <figure className='w-12 bg-red-nine m-[2px] rounded-[14px]'> <img src="./close_ring_duotone.svg" alt="icon-done" className='w-full p-[10px]'/> </figure> <span>Won't do</span></div>
        </div>



        {/* btn */}
        <div className='p-2 flex space-x-4 items-center justify-end mt-[55px]'>
          <div className='cursor-pointer w-28 py-[7px] bg-gray-ele text-white rounded-xl flex items-center justify-center gap-2'> <span> <img src="./Trash.svg" alt="" /></span>  Delete</div>
          <div className='cursor-pointer w-28 py-[7px] bg-blue-tw text-white rounded-xl flex items-center justify-center gap-2'> <span> <img src="./Done_round.svg" alt="" /></span> Save</div>
        </div>
      </div>
    </>
  )
}

export default AddNewTask

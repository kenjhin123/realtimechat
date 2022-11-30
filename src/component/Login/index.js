import React, { useState } from 'react'
import imgList from '../../Image/img'
function Login({callback}) {
    const [yourName,setYourName] = useState("")
    const handleName = () =>{
        callback(yourName)
    }
    const handleSubmit =(e)=>{
      e.preventDefault()
      handleName()
    }
  return (
    <div className='flex flex-col items-center h-[100%] justify-center'>
      <img 
      className='absolute object-cover h-[100%] w-[100%]'
      src={imgList} alt="Logo" />
      <div 
      className='z-10 h-[300px] w-[300px] bg-slate-400/60 rounded flex flex-col items-center justify-center'
      >
        <form onSubmit={e=>handleSubmit(e)}>
          <input 
          className='outline rounded block w-[250px] h-9 px-3'
          type="text" value={yourName} onChange={e=>setYourName(e.target.value)} placeholder='Nhập tên của bạn...'></input>    
        </form>
          <button 
          className='mt-4 w-[150px] bg-red-600 h-[50px] rounded color text-zinc-50'
          onClick={handleName}>Login</button>
        </div>
    </div>
  )
}

export default Login
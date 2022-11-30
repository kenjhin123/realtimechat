import React, { useEffect, useRef, useState } from 'react'
import { database,ref,push,onValue } from '../../firebase/config'
import { FaRegLaugh } from "react-icons/fa";
import { formatRelative } from 'date-fns';
import UserLogin from './UserLogin';
import '../ChatRoom/index.css'

export default function ChatRoom({name}) {
  const [iMess,setIMess] = useState("")
  const [message,setMessge] = useState([])
  const inputRef = useRef()
  const srollTop = useRef()
  useEffect(()=>{
    onValue(ref(database,'message'),(data)=>{
      let getMsg = [];
      data.forEach((d)=>{
        getMsg.unshift(d.val())
      })
      setMessge(getMsg)
    })
    
  },[])
  const handleSendM = ()=>{
    const date = new Date()
    const seconds = Math.floor(date.getTime() / 1000);
    push(ref(database,'message'),{
      name:name,
      message:iMess,
      seconds,
    })
    inputRef.current.focus()
    setIMess("")
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    handleSendM()
  }
    return (
    <div className='flex flex-col h-[100%] bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC]'>
        <h1 className='h-20 text-3xl text-black m-2 font-bold flex'>Xin Chào {name} <FaRegLaugh className='ml-3'></FaRegLaugh></h1>
        <div className='flex'>
          <div className='w-[70%] bg-white ml-2'>
            <ul
            ref={srollTop}
            className='list-none ml-5 h-[500px] overflow-y-scroll scroll-smooth pb-2 flexbox'>
              {message.map((msg,index)=>{
                return(
                    <li 
                    className='flex'
                    key={index}>
                      <span
                      className='text-[18px] text-bold'>{msg.name} :</span>
                      <span
                      
                      className='flex-1 text-[16px] ml-2'>{msg.message}</span>
                      <span
                      className='mr-4 text-slate-600 text-[12px]'
                      >{formatRelative(msg.seconds * 1000, new Date())}</span>
                    </li>
                )
              })}
            </ul>
            <div className='absolute bottom-0 flex mb-[30px]'>
              <form onSubmit={e => handleSubmit(e)}>
                <input
                ref={inputRef}
                className='h-10 w-[300px] outline m-5'
                type="text" value={iMess} 
                onChange={e=>setIMess(e.target.value)}
                placeholder='Chat gì đó đi nào! ~.~'></input>
              </form>
              <button 
              className='mt-4 w-[100px] bg-red-600 h-[50px] rounded color text-zinc-50'
              onClick={handleSendM}>Send</button>
            </div>
          </div>
          <UserLogin message={message}></UserLogin>
      </div>
    </div>
  )
}

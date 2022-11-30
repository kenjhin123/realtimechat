
import React from 'react'

function UserLogin({message}) {
    
 const newArray = []
 message.forEach((element) => {
    if(element.name === element.name){
        newArray.push(element.name)
    }else{
        return
    }
 });
 const UserName = [...new Set(newArray)]
  return (
    <div className='w-[30%] flex flex-col items-end'>
        
        <h1>Các con báo mới chat ở đây</h1>
        <ul>
            {UserName.map((e,index)=>{
                return (<li key={index}>{e}</li>)
            })}
        
        </ul>
    </div>
  )
}

export default UserLogin
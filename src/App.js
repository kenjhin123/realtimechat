import { useState } from 'react';
import './App.css';
import ChatRoom from './component/ChatRoom';
import Login from './component/Login';

function App() {
  const [showChat,setShowChat] = useState(false)
  const [name,setName] = useState("")
  const getName = (name)=>{
    setName(name)
    setShowChat(true)
  }

  return (
    <div className='h-screen'>
    {!showChat && <Login callback={getName}></Login>}
    {showChat && <ChatRoom name={name}></ChatRoom>}
    </div>
  );
}

export default App;

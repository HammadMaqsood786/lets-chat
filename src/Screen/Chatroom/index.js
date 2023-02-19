import React from 'react';
import { ReactDOM } from 'react';
import "./chatroom.css"; 
import ChatroomHeader from '../../Components/ChatroomHeader';

function ChatroomMain() {
  return (
    <div className='chatroom-main-main' >
        <div className='chatroom-messages-div' >
        <ChatroomHeader />

        </div>
       
    </div>
  )
}

export default ChatroomMain;
import React from 'react';
import { ReactDOM } from 'react';
import "./chatroom.css";
import ChatroomHeader from '../../Components/ChatroomHeader';
import sendBtnIcon from "../../imagesAndIcons/send-btn.png"

function ChatroomMain() {
  return (
    <div className='chatroom-main-main' >
      <div className='chatroom-messages-div' >
        <ChatroomHeader />

        <div className='middle-main' >

        </div>

        <div id='chatroom-footer' >

          <input id='msg-input' />

          <button className='send-btn' >
            <img src={sendBtnIcon} id='send-btn-icon' />
          </button>

        </div>
      </div>

    </div>
  )
}

export default ChatroomMain;
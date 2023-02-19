import React from 'react';
import { ReactDOM } from 'react';
import "./chat.css";
import ChatFriends from '../../Components/ChatFriends';

function ChatScreen() {
    return (
        <div className='chat-screen-main' >
          <ChatFriends />
        </div>
    )
}

export default ChatScreen;
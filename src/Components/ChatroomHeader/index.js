import React from 'react';
import { ReactDOM } from 'react';
import "../../Screen/Chatroom/chatroom.css";
import profileIcon from "../../imagesAndIcons/profile-icon.png";
import videoCallIcon from "../../imagesAndIcons/video-call-icon.png";
import callIcon from "../../imagesAndIcons/call-icon.png";

function ChatroomHeader() {
    return (
        <header className='chatroom-header-main' >
            <div className='header-left' >

                <img src={profileIcon} className="profile-pic" />

                <h3 className="chatroom-name" >Hammad Maqsood</h3>

            </div>

            <div className='header-right' >
                <div className="video-call-icon-div" >
                    <img src={videoCallIcon} className="video-call-icon" />
                </div>

                <div className='call-icon-div' >
                    <img src={callIcon}
                        className="call-icon" />
                </div>
            </div>
        </header>
    )
}

export default ChatroomHeader;
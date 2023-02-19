import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../Screen/Chat/chat.css";
import menuIcon from "../../imagesAndIcons/menu-icon.png";
import profileIcon from "../../imagesAndIcons/profile-icon.png";
// Material UI
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//Firebase Methods
import { initializeApp, app, auth } from "../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function ChatFriends() {

  const navigate = useNavigate();

  // Material UI

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ========= Firebase onAuth method ============== //

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const fullName = user.fullName;
        console.log("User ", user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  // ====== firebase Sign out method =====//

  const logOut = () => {

    signOut(auth).then(() => {
      handleClose()
      alert("Logout Successfully!")
      navigate('/login')
    }).catch((error) => {
      console.log("error", error.message)
    });
  }


  // Material UI

  return (
    <div className='chat-friends-main' >
      <header className="top-header" >
        <div className="header-logo-div" >
          <h2 id='header-logo' >Lets Chat</h2>
        </div>

        <div className='header-left-div' >
          <div className="profile-pic-div" >
            <img src={profileIcon} className="profile-pic" />
          </div>

          <div className="menu-icon-div" >

            <Button
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{ padding: '0px', minWidth: '0px', }}
            >
              <img src={menuIcon} id="menu-icon" />

            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>

          </div>
        </div>
      </header>

      <div className="chat-main-main" onClick={() => navigate('/chatroom')}  >
        <PreChatroom />
      </div>
    </div>
  )
}

function PreChatroom() {

  return (
    <div className="pre-chatroom-main" >
        <div className='pc-profile-image-div' >
          <img  src={profileIcon} className="pc-profile-img" />
        </div>

        <div className="pc-info-div" >
            <h4 className="pc-name" >Hammad Maqsood</h4>
            <p className="pc-message" >Assalam o Allaikum kesy han aap</p>
        </div>
    </div>
  )
}

export default ChatFriends;
import React from 'react'
import {FaVideo, FaUserPlus} from 'react-icons/fa'
import {FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <span><FaVideo /></span>
          <span><FaUserPlus /></span>
          <span><FiMoreHorizontal /></span>
        </div>
      </div>

      <Messages />
      <Input />
    </div>
  )
}

export default Chat
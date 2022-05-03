import React from 'react';

import './MessageView.css';

import profileIcon  from './profileIcon.svg';

import { WhatsAppMessage } from '../../Types/Types';

interface MessageViewProps {
    message: WhatsAppMessage;
}

function MessageView({
    message,
    ...props
}:MessageViewProps) {
  return (
    <div className='message_container'>
        <div className='message_view'>
            <div className='message_number'>
                <div className='message_icon_block'>
                    <img src={profileIcon}
                    alt='Profile Icon Diagram'
                    className='message_icon'
                    />
                </div>
                <div className='message_number_text'>
                    {message.messageSender?.split(':')[1] ||""}
                </div>
            </div>
            <div className='message_text'>
                {message.messageBody}
            </div>
        </div>
    </div>
  )
}

export default MessageView
import React, { useState, useEffect } from 'react';

import './Home.css';

import MessageView from '../../Components/MessageView/MessageView';

import Axios from "axios";

import { WhatsAppMessage } from '../../Types/Types';

import mobileChatIcon from './mobilechat.svg';

function Home() {

    const user = sessionStorage.getItem('smartWageUserToken')
    

    const whatsAppMessage: WhatsAppMessage = {
        messageSender: '',
        messageBody: '',
    }

    const [whatstsAppMessages, setWhatsAppMessages] = useState<Array<WhatsAppMessage>>([whatsAppMessage]);

    useEffect(() => {
        const getMessages = async () => {
            Axios.get('https://smart-wage-task-backend.herokuapp.com/api/whatsAppMessage-list/',
            ).then((response) => {
                console.log(response.data)
                setWhatsAppMessages(response.data)
            })
        }
        getMessages()
      }, []); 

return (
    <div className='page_container'>
        <div className='page_block'>
            <div className='image_block'>
                <img className='image_block_icon' src={mobileChatIcon} alt='Mobile Chat Icon' />
            </div>
            <div className='messages_block'>
                <div className='messages_container'>
                    <div className='messages_view'>
                        {whatstsAppMessages &&
                            whatstsAppMessages.map((message, index) => {
                                return (
                                    <MessageView message={message} key={index} />
                                )
                            })}
                        
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
)
}

export default Home
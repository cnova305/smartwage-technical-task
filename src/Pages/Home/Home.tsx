import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

import MessageView from '../../Components/MessageView/MessageView';

import Axios from "axios";

import { WhatsAppMessage } from '../../Types/Types';

import mobileChatIcon from './mobilechat.svg';

function Home() {

    // Setting Up Navigate Function
    let navigator = useNavigate();

    const user = sessionStorage.getItem('smartWageUserToken')

    if (user === null) {
        navigator('/')
    }


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

    // Setting State for Search string variable

    const [searchString, setSearchString] = useState('');

    // Function to set Search String 

    function handleSearch(e: { target: { value: string } }) {
        const searchValue = e.target.value;
        setSearchString(searchValue);
      }
    
    // Filtering messages by sender number

    var filteredMessages = whatstsAppMessages.filter(
        (filteredmesssage) =>
        !searchString || filteredmesssage?.messageSender?.toLocaleLowerCase().includes(searchString.toLowerCase()))

return (
    <>
        <div className='home_page_container'>
            <div className='home_page_block'>
                <div className='home_image_block'>
                    <input
                        className='home_form_input' type='text'
                        placeholder="Search by phone number"
                        value={searchString}
                        onChange={handleSearch}
                        />
                    <img className='home_image_block_icon' src={mobileChatIcon} alt='Mobile Chat Icon' />
                </div>
                <div className='home_messages_block'>
                    <div className='home_messages_container'>
                        <div className='home_messages_view'>
                        {filteredMessages &&
                                    filteredMessages.map((message, index) => {
                                        return (
                                            <MessageView message={message} key={index} />
                                        )
                                    })
                            }
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
        <div className='mobile_home_page_container'>
            <div className='mobile_home_page_block'>
                <div className='mobile_home_image_block'>
                    <img className='mobile_home_image_block_icon' src={mobileChatIcon} alt='Mobile Chat Icon' />
                    <input
                        className='mobile_home_form_input' type='text'
                        placeholder="Search by phone number"
                        value={searchString}
                        onChange={handleSearch}
                        />
                </div>
                <div className='mobile_home_messages_block'>
                    <div className='mobile_home_messages_container'>
                        <div className='mobile_home_messages_view'>
                            {filteredMessages &&
                                    filteredMessages.map((message, index) => {
                                        return (
                                            <MessageView message={message} key={index} />
                                        )
                                    })
                            }
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    </>
)
}

export default Home
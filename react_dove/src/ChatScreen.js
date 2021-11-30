import React, {useState} from 'react';
import "./ChatScreen.css";
import Avatar from '@mui/material/Avatar'


function ChatScreen () {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState ([
        { 
            name: 'The Rock', 
            image: "https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg", 
            message: 'Hows it going?'
        },
        { 
            name: 'The Rock', 
            image: "https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg", 
            message: 'I just got back from the gym'
        },
        { 
            message: 'mhmm'
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input}]);
        setInput("");
    }

    return(
        // BEM
        <div className="chatScreen">
            {messages.map(message => (
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                // message is from user
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )

            ))}
            <div>
                <form className="chatScreen__input">
                    <input 
                        className="chatScreen__inputField" 
                        placeholders="Type a message..." 
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}
export default ChatScreen
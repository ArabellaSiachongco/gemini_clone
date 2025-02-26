import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets.js';
import { Context } from '../../context/Context.jsx';

const Main = () => {
    
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)
    
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="user_icon" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, User name</span></p>
                    <p>How can i help yoiu today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see upcoming places</p>
                        <img src={assets.compass_icon} alt="compass_icon" />
                    </div>
                    <div className="card">
                        <p>Briefly summarizes this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="bulb_icon" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="message_icon" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="code_icon" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a promt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="gallery_icon" />
                            <img src={assets.mic_icon} alt="mic_icon" />
                            <img src={assets.send_icon} alt="send_icon" />
                        </div>
                    </div>
                    <p className="bottom-info">
                    Gemeni may display inaccurate info, including about people, so double check its responses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main

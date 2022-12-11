import React, { FC, useState } from 'react';
import '../../styles/App.css';
import './contacts.css'

const Contacts: FC = () => {
    const [whatsupActive, setWhatsupActive] = useState(false);
    const [telegramActive, setTelegramActive] = useState(false);
    const [emailActive, setEmailActive] = useState(false);
    const whatsup = [`What's up`, '+7-925-708-3583'];
    const telegram = [`Telegram`, '@brainstealer'];
    const email = [`E-mail`, 'v.i.kovalenko2020@gmail.com'];

    return (
        <div className='container'>
            <div className="contacts_container">
                <h1 className='contacts_title'>Contact me with</h1>
                <div className="contacts_list">
                    <button onClick={() => setWhatsupActive(!whatsupActive)} className="contacts_list_item">{!whatsupActive ? whatsup[0] : whatsup[1]}</button>
                    <button onClick={() => setTelegramActive(!telegramActive)} className="contacts_list_item">{!telegramActive ? telegram[0] : telegram[1]}</button>
                    <button className="contacts_list_item"><a href='https://github.com/brainstealer'>Github</a></button>
                    <button onClick={() => setEmailActive(!emailActive)} className="contacts_list_item"><div>{!emailActive ? email[0] : email[1]}</div></button>
                </div>
            </div>
        </div >
    )
}

export default Contacts;
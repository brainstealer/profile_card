import React, { FC, PropsWithChildren } from 'react';
import { MyButtonProps } from '../../modules/MyButton';
import './MyButton.css'

const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({ clickMe, children }) => {
    return (
        <button className='btn' onClick={clickMe}>
            {children}
        </button>
    )
}

export default MyButton;
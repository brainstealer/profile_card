import React, { FC } from 'react';
import './Home.css'

const Home: FC = () => {

    return (
        <div className='home'>
            <div className='home_title'>Hi! <br /> I'm Vlad</div>
            <div className='home_container'>
                <div className="home_card">
                    <h2 className='title-2'>Skills</h2>
                    <ul className='home_card_list'>
                        <li>JS</li>
                        <li>React</li>
                        <li>React router dom</li>
                        <li>Redux</li>
                        <li>TypeScript</li>
                        <li>CSS</li>
                        <li>Github (Git)</li>
                    </ul>
                </div>
                <div className="home_card">
                    <h2 className='title-2'>Achievments</h2>
                    <ul className='home_card_list'>
                        <li>React app with router, Typescript, function components etc.</li>
                        <li>Responsive design with hovers and animations for devices</li>
                        <li>Multifunctional single page applications with React and Redux</li>
                    </ul>

                </div>
                <div className="home_card">
                    <h2 className='title-2'>Road map</h2>
                    <div>
                        <ul className='home_card_list'>
                            <li>Backend</li>
                            <li>DevOps</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
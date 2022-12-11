import React from 'react';
import './styles/App.css';
import Navbar from './components/nav/Navbar/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Posts from './components/posts/Posts';
import PostID from './components/PostID/PostID';
import Contacts from './components/contacts/Contacts';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path='posts' element={<Posts />} />
                    <Route path='posts/:id' element={<PostID />} />
                    <Route path='contacts' element={<Contacts />} />
                    <Route path='*' element={<Navigate to='posts' replace />} />
                </Route>

            </Routes>
        </div>
    );
}

export default App;

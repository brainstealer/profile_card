import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/my_hooks';
import { fetchPosts } from '../../store/reducers/ActionCreator';
import Loader from '../loader/Loader';
import './Posts.css'

const Posts: FC = () => {
    const dispatch = useAppDispatch();
    const { posts, isLoading, error } = useAppSelector(state => state.postReducer);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);
    const navigate = useNavigate();
    return (
        <div className='posts_container'>
            {isLoading
                ? <Loader />
                : <>
                    {posts && posts.map(post =>
                        <div className='post_item' onClick={() => { navigate(`/posts/${post.id}`) }} key={post.id}>{post.id}. {post.title}</div>
                    )}</>
            }

        </div>
    )
}

export default Posts;
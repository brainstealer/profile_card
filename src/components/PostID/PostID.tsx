import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useFetching } from '../../hooks/my_hooks';
import PostService from '../../sevices/PostService';
import { fetchPosts } from '../../store/reducers/ActionCreator';
import { IPosts } from '../../modules/IPosts';
import '../../styles/App.css';
import MyButton from '../MuButton/MyButton';
import './PostID.css'
import Loader from '../loader/Loader';



const PostID: FC = () => {
    const params = useParams();
    const [post, setPost] = useState<IPosts>();
    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getPostById(id);
        setPost(response.data);
    });
    useEffect(() => {
        fetchPostsById(params.id)
    }, []);
    const navigate = useNavigate();
    return (
        <div className='container'>
            <MyButton clickMe={() => navigate('/posts')}>Back to posts</MyButton>
            {isLoading && <Loader />}
            {post &&
                <>
                    <div className='post_id_container'>
                        <h1 className='title-2'>{post.title}</h1>
                        <div className='post_id_content'>{post.body}</div>
                    </div>

                </>}
        </div>
    )
}

export default PostID;
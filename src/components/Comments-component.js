import React,{useState, useEffect, useCallback} from 'react';
import SingleCommentComponent from './Single-comment-component';
import uniqid from "uniqid";
import { addComments, getPostComment} from '../redux/Actions';
import { hideLoading, showLoading, showError, clearError} from '../redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../services/Services';
import Loading from './Loading';



function CommentsComponent() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const {comments, loading, error} = useSelector(state => state.CommentsReducer);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const id = uniqid();
        console.log(input, id);
        dispatch(addComments(input, id));
        setInput("")
    }

    const loadPost = useCallback(async() =>{
        dispatch(showLoading());
        dispatch(clearError());

        try {
            const data = await getPost();
            console.log("data>>>", data.data);
            dispatch(getPostComment(data.data))
        } catch (error) {
            console.log(error);
            dispatch(showError("error loading post"));
        } finally{
            dispatch(hideLoading())
        }
    },[]);

    useEffect(() =>{
        loadPost();
    },[]);

    if(loading){
        return <Loading/>
    };
    if(error){
        return(
            <div>
                <p>{error}</p>
                <button onClick={loadPost}>Повторить</button>
            </div>
        )
    }
    
    return (
        <div className='card_comments'>
            <form onSubmit={handleSubmit} className='comments_content'>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='comment' />
                <input type="submit"  hidden/>
            </form>    
                {
                    comments.map((elem, i) =>{
                        return <SingleCommentComponent key={i} {...elem} />
                    })
                }
            
        </div>
    )
}

export default CommentsComponent

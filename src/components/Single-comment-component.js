import React,{useEffect, useState} from 'react';
import { deleteComments } from '../redux/Actions';
import { useDispatch } from 'react-redux';

function SingleCommentComponent(props) {
    
    const {title, id} = props;
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    useEffect(() =>{
        if(title){
            setComment(title)
        }
    },[title])

    const deleteItem = () =>{
        dispatch(deleteComments(id))
    }

    return (
        <div className='comments_item'>
            <div className="comments_item_delete" onClick={deleteItem} >X</div>
            <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" placeholder='text'/>
            <input type="submit" hidden />
        </div>
    )
}

export default SingleCommentComponent;
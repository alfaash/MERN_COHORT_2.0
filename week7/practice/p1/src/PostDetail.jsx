import { useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import {useRecoilValue, useRecoilState} from "recoil"
import {posts, postsAtomFamily} from "./atom"

export default function PostDetail(){
    const navigate = useNavigate();
    let postID = useParams();
    postID.id = Number(postID.id);
    
    const [postsStatus, updatePostsStatus] = useRecoilState(postsAtomFamily(postID.id));
    useEffect(()=>{
        updatePostsStatus({
            id: Number(postID.id),
            status: "read"
        })
    },[]);

    function clickHandler(path){
        navigate(path)
    }
    const pst = useRecoilValue(posts);
    const post = pst.find((p)=>{
        if(p.id==(postID.id)) return p;
    })

    return (
        <>
        <h1>Title: {post.title}</h1>
        <p>{post.content}</p>
        <button onClick={() => navigate("/")}>Back</button>
        </>
    )
}
import {useNavigate, useParams} from 'react-router-dom'
import {useRecoilValue} from "recoil"
import {posts} from "./atom"

export default function PostDetail(){
    const navigate = useNavigate();
    
    const postID = useParams();
    function clickHandler(path){
        navigate(path)
    }
    let pst = useRecoilValue(posts);
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
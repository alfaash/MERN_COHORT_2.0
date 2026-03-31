import { useNavigate } from "react-router-dom";
import {useRecoilValue, RecoilRoot} from "recoil"
import {posts, postsAtomFamily} from "./atom"

export default function Home(){
    const navigate = useNavigate();
    function clickHandler(path){
        navigate(path);
    }
    return (
        <>
                <h1>Posts:- </h1>
                <BlogPosts clickHandler={clickHandler}/>
                <button onClick={()=>clickHandler("/About")}>About Page</button>
        </>
    )
}

function BlogPosts({ clickHandler }) { 
    const allPosts = useRecoilValue(posts);

    return (
        <div>
            {allPosts.map((post) => (
                <BlogPost key={post.id} post={post} clickHandler={clickHandler} /> 
            ))}
        </div>
    );
}


function BlogPost({ post, clickHandler }) { 
    const postsStatus = useRecoilValue(postsAtomFamily(post.id));

    return (
        <div>
            <h2>Title: {post.title}</h2>
            <span>{postsStatus.status === "unread" ? "❌" : "✅"}</span>
            <button onClick={() => clickHandler(`/PostDetail/${post.id}`)}>Visit</button>
        </div>
    );
}


import { useNavigate } from "react-router-dom";
import {useRecoilValue, RecoilRoot} from "recoil"
import {posts} from "./atom"

export default function Home(){
    const navigate = useNavigate();
    function clickHandler(path){
        navigate(path);
    }
    return (
        <>
            <h1>Posts:- </h1>
            <BlogPosts clickHandler={clickHandler}/>
            {/* <button onClick={()=>clickHandler("/postDetail")}>PostDetail Page</button> */}
            <button onClick={()=>clickHandler("/about")}>About Page</button>
        </>
    )
}

function BlogPosts({clickHandler}){
    const allPosts = useRecoilValue(posts);
    return (
        <div>
            {
                allPosts.map((post)=>{
                    return (
                        <div key={post.id}>
                            <h2>Title: {post.title}</h2>
                            <button onClick={()=>clickHandler(`/PostDetail/${post.id}`)}>Visit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
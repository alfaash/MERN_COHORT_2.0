import { VideoCard } from "./VideoCard"
const VIDEOS = [{
    title:"Portugal squad reivew WC 2026", 
    channel:"Markaroni",
    stats:"46M | 13 days ago",
    thumbnail:"thumbnail.jpg",
    pfp:"pfp.jpg"
},{
    title:"Why every app looks shit?", 
    channel:"Techpedia",
    stats:"12M | 1 Month ago",
    thumbnail:"thumbnail1.jpg",
    pfp:"pfp1.jpg"
},
{
    title:"NEET(leaked)", 
    channel:"thoughpod",
    stats:"123M | 2 weeks ago",
    thumbnail:"thumbnail2.jpg",
    pfp:"pfp2.jpg"
},
{
    title:"Are aliens real?", 
    channel:"Dhruv Rathee",
    stats:"1M | 1 day ago",
    thumbnail:"thumbnail3.jpg",
    pfp:"pfp3.jpg"
}]

export const VideoGrid= ()=>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                VIDEOS.map(video=><div>
                    <VideoCard title={video.title} pfp={video.pfp} thumbnail={video.thumbnail} channel={video.channel} stats={video.stats}></VideoCard>
                </div>)
            }
        </div>
    )
}
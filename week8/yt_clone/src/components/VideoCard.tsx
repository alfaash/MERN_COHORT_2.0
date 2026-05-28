export function VideoCard(props) {
    return (
        <div className="cursor-pointer">
            <img className="rounded-xl" src={props.thumbnail} alt="Video Thumbnail" />
            <div className="grid grid-cols-12">
                <div className="pt-3 col-span-1">
                    <img className="rounded-full w-7 h-7" src={props.pfp} alt="Video Thumbnail" />
                </div>
                <div className="pt-3 col-span-11 pl-2">
                    <div className="" >{props.title}</div>
                    <div className="text-gray-400 text-sm">{props.channel}</div>
                    <div className="text-gray-400 text-sm">{props.stats}</div>
                </div>
            </div>
        </div>
    )
}   
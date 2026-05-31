import {Searchbar} from "./Searchbar"
export const AppBar = ()=>{
    return <div className="flex justify-between items-center">
        <div className="">
            <img className="h-15 w-15" src="ytLogo.png"></img>
        </div>
        <div>
            <Searchbar/>
        </div>
        <div>
            Sign
            
        </div>
    </div>
}   
// State Management
import {useRecoilState, useSetRecoilState, useRecoilValue, RecoilRoot} from "recoil"
import {countAtom, evenSelector} from "./store/atoms/count"
function App(){

    return (
        <>  
            <Count/>
        </>
    )
}

function Count(){
    console.log("Count")
    
    return <div>
        <RecoilRoot>
            <CountRender/>
            <Buttons/>
            <Parity/>
        </RecoilRoot>
    </div>
}

function CountRender(){
    console.log("CountRender");
    const count = useRecoilValue(countAtom);
    return (
        <div>
            <b>{count}</b>
        </div>
    )
}

function Parity(){
    console.log("Parity");
    const isEven = useRecoilValue(evenSelector);
    let value = "";
    if(!isEven) value="It is even";
    return (
        <p>
            {value}
        </p>
    )
}

function Buttons(){
    console.log("Buttons");
    const setCount = useSetRecoilState(countAtom);
    return (
        <div>
            <button onClick={()=>{
                setCount(count=>count+1);
            }}>Increase</button>
            <button onClick={()=>{
                setCount(count=>count- 1);
            }}>Decrease</button>
        </div>
    )

}

export default App; 

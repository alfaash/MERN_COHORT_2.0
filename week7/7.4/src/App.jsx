import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotifications } from "./atoms"


function App() {
  let networkValue = useRecoilValue(networkAtom);
  let finalNetworkValue = networkValue;
  if(networkValue>99) finalNetworkValue="99+";
  const jobsValue = useRecoilValue(jobsAtom);
  const [messagingValue,setMessagingValue] = useRecoilState(messagingAtom);
  const notificationsValue = useRecoilValue(notificationsAtom);
  const totalNotificationsValue = useRecoilValue(totalNotifications);
  return (
    <>
      <p>Hello</p>
      <button>Home</button>
      <button>My Network ({finalNetworkValue})</button>
      <button>Jobs ({jobsValue})</button>
      {/* <MsgBtn/> */}
      <button onClick={()=>{
        setMessagingValue(s=>s+1);
      }}> Messaging ({messagingValue})</button>
      <button>Notification ({notificationsValue})</button>
      <button>Me</button>
      <button>All Notifications: ({totalNotificationsValue})</button>
    </>
  )
}

function MsgBtn(){
    const [messagingValue,setMessagingValue] = useRecoilState(messagingAtom);
    return (
      <button onClick={()=>{
        setMessagingValue(s=>s+1);
      }}> Messaging ({messagingValue})</button>
    )
}

export default App

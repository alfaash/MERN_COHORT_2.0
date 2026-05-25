import { atom, selector } from "recoil";
import axios from 'axios'

// ASYNCHRONOUS DATA QUERIES

export const notifications = atom({
    key: "notifications",
    default: selector({
        key:"notificationsSelector",
        get: async ()=>{
            await new Promise((res,rej)=> {setTimeout(res,5000)});
            const res = await axios.get("http://localhost:3000");
            return res.data;
        }
    })
});


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})
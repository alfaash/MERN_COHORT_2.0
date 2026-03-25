import {atom, selector} from "recoil"

export const networkAtom = atom({
    key:"networkAtom",
    default:102
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default:12
})
export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
})
export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:5
})

export const totalNotifications = selector({
    key:"totalNotifications",
    get:({get})=>{
        return get(networkAtom)+get(jobsAtom)+get(messagingAtom)+get(notificationsAtom);
    }
})
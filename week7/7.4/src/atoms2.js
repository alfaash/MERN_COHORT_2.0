// ATOM FAMILY

import { atomFamily, atom } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});



export const todosAtom = atom({
    key:"todosAtom",
    default:[{
        id: 1,
        title: "Go to Gym",
        description: "Hit the gym from 7-9"
    }, {
        id: 2,
        title: "Go to eat food",
        description: "Eat food from from 9-11"
    },]
})
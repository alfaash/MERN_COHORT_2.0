// SELECTOR FAMILY

import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
        await new Promise(r => setTimeout(r,2000));
      const res = await axios.get(`http://localhost:3000/todos?id=${id}`);
      return res.data.todo;
    },
  })
});

export const todAtomFamily = atomFamily({
  id:"todoAtomFamily",
  default: selectorFamily({
    id:"todoSelectorFamily",
    get: (id)=> async ({get})=>{
      const res = await axios.get(`http://localhost:3000/todos?id=${id}`)
      return res.data.todo;
    },
  })
})
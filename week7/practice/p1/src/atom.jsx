import {atom} from "recoil"

export const posts = atom({
    key:"posts",
    default:[
  { id: 1, title: "What is React?", content: "React is a JS library for building UIs..." },
  { id: 2, title: "Understanding Hooks", content: "Hooks let you use state in functional components..." },
  { id: 3, title: "Why use Recoil?", content: "Recoil gives React apps simple global state management..." },
]
})
// ATOM FAMILY

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todosAtomFamily, todosAtom } from './atoms2';

function App() {
  return <RecoilRoot>
    <Updater/>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function Updater(){
  const setUpdate = useSetRecoilState(todosAtomFamily(2));
  setTimeout(()=>{
    setUpdate({
      title:"changedTitle",
      description:"changedDesc"
    })
  },5000);
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
//     const todo = useRecoilValue(todosAtom);
//    const finalTodo = todo.filter((td)=>{
//     if(td.id==id) return td;
//    })

  return (
    <>
      {todo.title}
      {" : "}
      {todo.description}
      <br />
    </>
  )
}

export default App
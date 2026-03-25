// ATOM FAMILY

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily, todosAtom } from './atoms2';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
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
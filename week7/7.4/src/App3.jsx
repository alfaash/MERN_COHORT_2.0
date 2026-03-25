// SELECTOR FAMILY

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms3';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
//    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));


// useRecoilStateLoadable 
const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
   console.log("STATE: ",todo.state);
    if(todo.state=="loading"){
        return (
            <><p>LOADING...</p></>
        )
    }
    else if(todo.state=="hasValue"){
        return (
          <>
            {todo.contents.title}
            {" --:-- "}
            {todo.contents.description}
            <br />
          </>
        )
    }
    else{
        return (
            <>ERROR</>
        )
    }

    // return (
    //   <>
    //     {todo.contents.title}
    //     {" --:-- "}
    //     {todo.contents.description}
    //     <br />
    //   </>
    // )
}

export default App
// useCallback and React.memo / memo
import { useEffect, useState, useMemo, useCallback, memo } from 'react'
// import './App.css'

function App() {
    const [exchange1Data, setExchange1Data] = useState({});
    const [exchange2Data, setExchange2Data] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(()=>{
        setExchange1Data({
            returns: 100
        })
    },[])

    useEffect(()=>{
        setExchange2Data({
            returns: 100
        })
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            setBankData({
                income: 100
            })
        },5000)
    },[])

    const calculateReturns = useCallback(()=>{
        return exchange1Data.returns + exchange2Data.returns;
    },[exchange1Data,exchange2Data])
    const incomeTax = (calculateReturns() + bankData.income)*0.3;

    return (
        <>
            <Child func={calculateReturns}></Child>
            Hi there, your income tax returns are {incomeTax}
        </>
    )
}

const Child = memo(({func})=>{
    console.log("Child")
    return (
        <>
        <p>Your returns are {func()}</p>
        </>
    )
})

export default App

// Wrappers


function App() {

  return (
    <>
    <CardWrapper>
      <TextComponent/>
    </CardWrapper>
    </>
  )
}

function TextComponent(){
  return (
    <div style={{
      textAlign:"center"
    }}>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  )
}

function CardWrapper({children}){
  console.log(children)
  return (
    <div
      style={{
        backgroundColor: "rgba(72, 162, 33, 0.6)",
        border: "5px dotted blue",
        borderRadius: "12px",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.15)"
      }}
    >
      {children}
    </div>
  )
}

export default App

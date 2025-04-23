import Home from "./Home";


function App() {
  let a = 20;
  let color = ["red", "green", "blue", "skyblue"]
  const sum = () => {
    return 50 + 20
  }

  return (
    <>
      <Home
        abc={a}
        color={color}
        sum={sum}
      />
    </>
  )
}

export default App

import Counter from "./pages/Counter"
import { CounterProvider } from './context/Contextprovider';

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  )
}

export default App

import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import { api } from '@/client-api'

export const Route = createFileRoute('/')({ component: App })

const response = await api.get()
console.log("oi",response.data)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/tanstack-circle-logo.png"
          className="App-logo"
          alt="TanStack Logo"
        />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
          a
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {response.data}
        <a
          className="App-link"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  )
}

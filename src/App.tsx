import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <div>
        <h1>Main Page!</h1>
        <p>Navigation...</p>
        <nav>
          <ul>
            <li><Link to="profile">Profile Page</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App

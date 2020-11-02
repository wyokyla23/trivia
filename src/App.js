import React from 'react'
import Trivia from './pages/Trivia'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Routes from './routes'

function App() {
  console.log('Hello, there!')
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;

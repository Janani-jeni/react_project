import Home from "./components/Home";
import TodoApp from "./components/TodoApp";
import {BrowseRouter as Router,Routes,Route} from "react-router-dom"

function App (){
  return(
    <div className="app">
      <TodoApp />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
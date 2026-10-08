import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { createContext, useState } from 'react'


export let UserContext = createContext();

function App() {

  let [user , setuser] = useState ({uName:"Jeni",age:24,email:"abc@gmail.com"})

  // Removed local UserContext creation

  return (
    <UserContext.Provider value={{user}}>
    
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>

    </UserContext.Provider>
  )
}

export default App

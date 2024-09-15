import React, {useState, useEffect, createContext} from 'react'
import './App.css';

import Navbar from './components/Navbar';
import Footbar from './components/Footbar';
import Library from './components/Library';


export const UserContext = createContext({})

function App() {
  const [user, setUser] = useState(0);

  useEffect(() => { //Called when page is initially loaded
      const getUser = async() => {
        const res = await fetch('http://localhost:9000/users?username=Henrique+Pitta')
        const data = await res.json()

        setUser(data)
      }
      getUser();
  }, []) //Dependency array --> if one of these values changes between renders (useEffect will be re-run)

  return (
    <div className="App">

      {/* Context can be expanded later with more listed tuples */}
      <UserContext.Provider value={{user: user}}> 
        <Navbar/>

        <div className='mid-container'>

          <Library/>

          <div className='mid2'>
            General - {user.username}  
          </div>

          <div className='mid3'>
            Album
          </div>

        </div>

        <Footbar/>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;


//sptify-clone
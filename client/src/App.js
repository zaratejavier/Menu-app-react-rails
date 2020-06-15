import React, {useState, useEffect} from 'react';
import axios from "axios"
import MenuList from "./components/MenuList"
// import MenoForm from "./components/MenuForm"
import './App.css';

function App() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios
      .get('/api/menus')
      .then((res) => {
        console.log(res.data);
        setMenus(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])

  return (
    <div className="App">
      <h1>Menu</h1>
      <MenuList menus={menus}/>
      

    </div>
  );
}

export default App;

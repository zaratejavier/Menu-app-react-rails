import React, {useState, useEffect} from 'react';
import axios from "axios"
import MenuList from "./components/MenuList"
import MenuForm from "./components/MenuForm"
import './App.css';

function App() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios
      .get('/api/menus')
      .then((res) => {
        console.log(res.data);
        setMenus(res.data) //gets the data from database and adds it to the state
      })
      .catch((err) => {
        console.log(err) // if there is an error it will come in here
      })
  },[])

  async function addItem(name) {
    try {
      const res = await axios.post("/api/menus", {name});
      setMenus([res.data, ...menus]);
    }catch(err) {
      console.log(err)
    }
  }

  function deleteMenu(id) {
    axios
      .delete(`/api/menus/${id}`)
      .then((res) => {
        const filterMenu = menus.filter((m) => m.id !== res.data.id);
        setMenus(filterMenu);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className="App">
      <h1>Menu</h1>
      {/* we are adding the todoItem to the menu form */}
      <MenuForm addItem={addItem}  />
      {/* gets the menus and passes them to Menu list component  */}
      <MenuList menus={menus} deleteMenu={deleteMenu}/>  
      

    </div>
  );
}

export default App;

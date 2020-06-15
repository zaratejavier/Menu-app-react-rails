import React, {useState} from "react"
import { Form} from "semantic-ui-react"

function MenuForm({addItem}) {
  const [menu, setMenu] = useState("");

  function handleSubmit(e){
    addItem(menu); // we have the additem in the app component. so we will add an item to menu state
    setMenu(""); // this will clear the input after user submits
  }
   
  function handleChange(e){
    setMenu(e.target.value)
    console.log(e.target.value)
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label = {"Menu Name"}
        placeholder = {"Enter Menu"}
        required
        value={menu}
        onChange={handleChange}
      />
      <Form.Button>Add</Form.Button>
    </Form>
  )
}


export default MenuForm
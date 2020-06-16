import React from "react";
import { Button, Icon } from "semantic-ui-react";

const Menu = ({ name, id, deleteMenu }) => {
  return (
    <div style={styles.flex} className="ui card">
      <h1 className="header">{name}</h1>
      <Button
        icon
        color="red"
        size="tiny"
        onClick={() => deleteMenu(id)}
      >
        <Icon name="trash" />
      </Button>
    </div>
  );
};
const styles = {
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "10px"
  },
};

export default Menu;
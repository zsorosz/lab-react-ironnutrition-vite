import React from "react";
import { Divider, Input } from "antd";

function AddFoodForm(props) {
  return (
    <div style={{ width: "50%" }}>
      <form
        onSubmit={props.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Divider>Add Food Entry</Divider>
        <label>Name</label>
        <Input
          value={props.name}
          type="text"
          onChange={(event) => props.setName(event.target.value)}
        />
        <label>Image</label>
        <Input
          value={props.image}
          type="text"
          onChange={(event) => props.setImage(event.target.value)}
        />
        <label>Calories</label>
        <Input
          value={props.calories}
          type="text"
          onChange={(event) => props.setCalories(event.target.value)}
        />
        <label>Servings</label>
        <Input
          value={props.servings}
          type="text"
          onChange={(event) => props.setServings(event.target.value)}
        />
        <button type="submit" style={{ margin: "2rem" }}>
          Create
        </button>
      </form>
    </div>
  );
}

export default AddFoodForm;

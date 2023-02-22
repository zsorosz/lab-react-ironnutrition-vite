import React from "react";
import { useState } from "react";
import { Divider, Input } from "antd";

function AddFoodForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
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
          type="number"
          onChange={(event) => props.setCalories(event.target.value)}
        />

        <label>Servings</label>
        <Input
          value={props.servings}
          type="number"
          onChange={(event) => props.setServings(event.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;

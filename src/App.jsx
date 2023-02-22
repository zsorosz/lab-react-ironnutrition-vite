import { useState } from "react";
import "./App.css";
import { Button, Divider, Row, Card, Col } from "antd";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodState, setFoodState] = useState(foods);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFoodState((prevFoodState) => {
      return [...prevFoodState, { name, image, calories, servings }];
    });
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div className="App">
      <AddFoodForm
        name={name}
        setName={setName}
        image={image}
        setImage={setImage}
        calories={calories}
        setCalories={setCalories}
        servings={servings}
        setServings={setServings}
        foodState={foodState}
        setFoodState={setFoodState}
        handleSubmit={handleSubmit}
      />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodState.map((food) => {
          return <FoodBox food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;

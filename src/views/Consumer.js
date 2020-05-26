import React from "react";
import { List, Segment, Card, Icon, Image, Grid } from "semantic-ui-react";

const trucks = [
  {
    name: "Almond",
    isActive: true,
    description: "",
    foods: [{ name: "burger" }, { name: "fries" }],
  },
  {
    name: "Pepper",
    isActive: true,
    foods: [{ name: "chicken wrap" }, { name: "salad" }],
  },
  {
    name: "Paprika",
    isActive: true,
    foods: [
      { name: "tuna salad" },
      { name: "shrimp" },
      { name: "chicken wrap" },
      { name: "salad" },
    ],
  },
  {
    name: "Oregano",
    isActive: true,
    foods: [{ name: "wine" }, { name: "beer" }],
  },
  {
    name: "Cumin",
    isActive: true,
    foods: [{ name: "falafel" }, { name: "salad2" }],
  },
];

const Consumer = () => {
  return (
    <div >
      <h2>Consumer</h2>
      <p>This is where we can see location, and food</p>
      <Image style={{marginBottom: '0'}} src="https://picsum.photos/700/250" wrapped ui={false} />
    <Card style={{marginTop: '0', align: 'center'}}>
        hi
    </Card>
        {/* {trucks
          .filter((truck) => truck.isActive)
          .map((truck) => (
           <div>hi</div>
          ))} */}
    </div>
  );
};

export default Consumer;

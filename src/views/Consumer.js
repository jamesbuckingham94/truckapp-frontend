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
      <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>Almond</Card.Header>
        <Card.Description>
        Doc E's BBQ is well renowned throughout Minneapolis, MN, servin' up the heartiest BBQ meats on the streets. It's a food trailer that's perfected that low and slow style, making for meats so juicy and tender, your inner carnivore will come out to play.
        </Card.Description>
      </Card.Content>
      <Card.Content>
      <List>
    <List.Item>
      <List.Icon name='users' />
      <List.Content>Almond</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>Minneapolis, MN</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='facebook square' />
      <List.Content>
        <a href='http://www.facebook.com'>Facebook</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='instagram' />
      <List.Content>
        <a href='http://www.instagram.com'>Instagram</a>
      </List.Content>
    </List.Item>
  </List>
      </Card.Content>
    </Card>
    </Card.Group>
        {/* {trucks
          .filter((truck) => truck.isActive)
          .map((truck) => (
           <div>hi</div>
          ))} */}
    </div>
  );
};

export default Consumer;

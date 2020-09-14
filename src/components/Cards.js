import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "../axios";
import "./Card.css";
function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/cards");
      console.log(req.data);
      setPeople(req.data);
    };

    fetchData();
  }, []);

  const outOfFrame = (name) => {
    console.log(`${name} is gone.`);
  };
  const swiped = (directions, nameToDelete) => {
    console.log(`${nameToDelete} is going ${directions}`);
  };

  return (
    <div className="cards">
      <div className="cards__cardContainer">
        {people?.map((person, i) => (
          <TinderCard
            className="swipe"
            key={i}
            onSwipe={(dir) => swiped(dir, person.name)}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="mainCard"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;

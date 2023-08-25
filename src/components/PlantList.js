import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { plants, searchTerm }) {
  const filteredPlants = plants.filter(plantObj => {
    return plantObj.name.toLowerCase().includes(searchTerm)
  })

  const plantCards = filteredPlants.map(plantObj => {
    return <PlantCard key={plantObj.id} plant={plantObj} />
  });

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;

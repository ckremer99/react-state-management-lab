// src/App.jsx
import React, { useState } from 'react';
import './App.css'

const App = () => {
  const initialZombieFighters = [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ];

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(500)
  const [zombieFighters, setZombieFighters] = useState(initialZombieFighters)
  const [teamStrength, setTeamStrength] = useState(0)
  const [teamAgility, setTeamAgility] = useState(0)

  const handleAddFighter = (newZombieFighter) => {
    if (newZombieFighter.price > money) {
      console.log('Not enough money');
      return;
    }
  
    const updatedTeam = [...team, newZombieFighter];
    const newTeamStrength = updatedTeam.reduce((acc, member) => acc + member.strength, 0);
    const newTeamAgility = updatedTeam.reduce((acc, member) => acc + member.agility, 0)
  
    setTeam(updatedTeam);
    setMoney(money - newZombieFighter.price);
    setTeamStrength(newTeamStrength);
    setTeamAgility(newTeamAgility)
  };

  const handleRemoveFighter = (removedZombieFighter) => {
    const idxToRemove = team.findIndex(member => member === removedZombieFighter);
    const updatedTeam = [...team]
    updatedTeam.splice(idxToRemove, 1);

    const newTeamStrength = updatedTeam.reduce((acc, member) => acc + member.strength, 0);
    const newTeamAgility = updatedTeam.reduce((acc, member) => acc + member.agility, 0)

    setTeam(updatedTeam);
    setMoney(money + removedZombieFighter.price);
    setTeamStrength(newTeamStrength);
    setTeamAgility(newTeamAgility)
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {teamStrength}</h3>
      <h3>Team Agility: {teamAgility}</h3>
      <h3>Team</h3>
      <p>{team.length === 0 ? 'Pick some team members' : ''}</p>
      <ul>
        {team.map((member, idx) => {
          return <li key={idx}>
            <p>Name: {member.name}</p>
            <img src={member.img} alt={member.name}/>
            <p>Price: {member.price}</p>
            <p>Strength: {member.strength}</p>
            <p>Agility: {member.agility}</p>
            <button onClick={()=> handleRemoveFighter(member)}>Remove</button>
          </li>
        })}
      </ul>
      <ul>
        {zombieFighters.map((fighter, idx) => {
          return <li key={idx}>
            <img src={fighter.img} alt={fighter.name}/>
            <p>Name: {fighter.name}</p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        })}
      </ul>
    </>
  );
}

export default App

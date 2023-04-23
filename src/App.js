import './App.css';
import React, {useState} from 'react';
import Dropdown from "./components/Dropdown"
import Stats from './components/Stats';
import NumberComponent from './components/NumberComponent';
import TextComponent from './components/TextComponent';

const memphis = {
  "name": "MEMPHIS",
  "info": {
      "name": "Memphis",
      "class": "Barbarian",
      "level": 10,
      "race" : "Harengon",
      "background": "Feylost",
      "alignment" : "CN"
  },
  "stats": {
      "str": 25,
      "dex": 15,
      "con": 20,
      "int": 5,
      "wis": 7,
      "cha": 13
  },
  "proficiencyBonus": 4,
  "throws": ["STR", "CON"],
  "skills": ["Animal Handling", "Athletics", "Deception", "Indimidation", "Nature", "Perception", "Survival"],
  "bio": ["Memphis wandered into the Feywild as a child. After many years, he found his way out, but the years alone and the ambient magics had changed him. He preferred to live alone in the forest, but could be persuaded to help out with promises of treats."],
  "maxHP": 125,
  "AC": 19,
  "initiative": 6,
  "speed": 40,
  "hitDice": 12,
  "attacks": [
      {
          "name": "Javelin",
          "bonus": 11,
          "damage": "1d6 + 7 P"
      },
      {
          "name": "Net",
          "bonus": 11,
          "damage": 0,
          "special": "Target is Restrained until it succeeds on a DC 10 Strength check, or the net takes 5 slashing damage."
      },
      {
          "name": "Bite",
          "bonus": 11,
          "damage": "1d8 + 10 P.",
          "special": "If HP < 1/2, restores HP equal to Proficiency Bonus"
      },
      {
          "name": "Claws",
          "bonus": 11,
          "damage": "1d6 + 10 S.",
          "special": "Grants +1 attack when taking the Attack action."
      },
      {
          "name": "Tail",
          "bonus": 11,
          "damage": "1d8 + 10 P.",
          "special": "Reach. Can use reaction to swipe tail and add 1d8 to AC against one attack against you."
      }
  ],
  "features": [
      "Size: small", "Hare Trigger", "Lucky Footwork", "Rabbit Hop", "Rage", "Unarmored Defense", "Danger Sense", "Reckless Attack", "Primal Knowledge", "Extra Attack", "Fast Movement", "Feral Instinct", "Instinctive Pounce", "Brutal Critical", "Path of the Beast", "Bestial Soul", "Infectious Fury"
  ],
  "languages": [
      "Jaw Harp", "Light Armor", "Medium Armor", "Shields", "Simple Weapons", "Martial Weapons", "Common", "Sylvan", "Elvish"
  ],
  "equipment": [
      [0, 8, 0, 0, 0],
      "Explorer's Pack", "4 Javelins", "2 Nets", "Shield", "Traveler's Clothes", "A multicolored D6", "A scrap of cloth from an old banner", "A glass jar of 'Griffin Grease'"
  ]
}


function App() {
  const [char, setChar] = useState(memphis)
  return (
    <div className="App">
      <Dropdown />
      <Stats stats={char.stats} className="stats" />
      <NumberComponent num={char.proficiencyBonus} str="Proficiency Bonus" className="proficiencyBonus" />
      <NumberComponent num={char.AC} str="Armor Class" className="armorClass" />
      <NumberComponent num={char.initiative} str="Initiative" className="initiative" />
      <TextComponent arr={char.bio} str="Character Biography" className="bio" />
      <TextComponent arr={char.features} str="Features & Traits" className="features" />
    </div>
  );
}

export default App;

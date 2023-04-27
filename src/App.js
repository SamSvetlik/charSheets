import './App.css';
import React, {useState} from 'react';
import Dropdown from "./components/Dropdown"
import Stats from './components/Stats';
import NumberComponent from './components/NumberComponent';
import TextComponent from './components/TextComponent';
import SavingThrows from './components/SavingThrows';
import Skill from './components/Skill';
import Attacks from './components/Attacks';
import DeathSaves from './components/DeathSaves';

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
      "STR": 25,
      "DEX": 15,
      "CON": 20,
      "INT": 5,
      "WIS": 7,
      "CHA": 13
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

  function getAbilityModifier(abilityScore) {
    let modifier;
    
    switch (abilityScore) {
      case 1:
        modifier = -5;
        break;
      case 2:
      case 3:
        modifier = -4;
        break;
      case 4:
      case 5:
        modifier = -3;
        break;
      case 6:
      case 7:
        modifier = -2;
        break;
      case 8:
      case 9:
        modifier = -1;
        break;
      case 10:
      case 11:
        modifier = 0;
        break;
      case 12:
      case 13:
        modifier = 1;
        break;
      case 14:
      case 15:
        modifier = 2;
        break;
      case 16:
      case 17:
        modifier = 3;
        break;
      case 18:
      case 19:
        modifier = 4;
        break;
      case 20:
      case 21:
        modifier = 5;
        break;
      case 22:
      case 23:
        modifier = 6;
        break;
      case 24:
      case 25:
        modifier = 7;
        break;
      case 26:
      case 27:
        modifier = 8;
        break;
      case 28:
      case 29:
        modifier = 9;
        break;
      case 30:
        modifier = 10;
        break;
      default:
        throw new Error("Invalid ability score.");
    }
    
    return modifier;
  }

  return (
    <>
      <Dropdown />
      <div className="outermostContainer">
        <div className='statSkillContainer'>
          <Stats className="stats" stats={char.stats} getAbilityModifier={getAbilityModifier} />
          <NumberComponent className="proficiencyBonus" num={char.proficiencyBonus} str="Proficiency Bonus" />
          <SavingThrows className="savingThrows" profArray={char.throws} stats={char.stats} proficiencyBonus={char.proficiencyBonus} getAbilityModifier={getAbilityModifier} />
          <Skill className="skills" profArray={char.skills} stats={char.stats} proficiencyBonus={char.proficiencyBonus} getAbilityModifier={getAbilityModifier} />
        </div>
        <div className='hpEtcContainer'>
          <NumberComponent className="armorClass" num={char.AC} str="Armor Class" />
          <NumberComponent className="initiative" num={char.initiative} str="Initiative" />
          <NumberComponent className="speed" num={char.speed} str="Speed" />
          <NumberComponent className="maxHP" num={char.maxHP} str="Current Hit Points" />
          <NumberComponent className="tempHP" num={0} str="Temporary Hit Points" />
          <NumberComponent className="hitDice" num={char.hitDice} str="Hit Dice" />
          <DeathSaves className="deathSaves"/>
          <Attacks className="attacks" attacks={char.attacks} />
        </div>
        <div className='bioFeaturesContainer'>
        <TextComponent className="bio" arr={char.bio} str="Character Biography" />
        <TextComponent className="features" arr={char.features} str="Features & Traits" />
        </div>
        <div className='languageEquipmentContainer'>
          <NumberComponent className="passiveWisdom" num={getAbilityModifier(char.stats.WIS) + 10} str="Passive Wisdom (Perception)" />
          <TextComponent className="languages" arr={char.languages} str="Other Proficiencies & Languages"/>
          <TextComponent className="equipment" arr={char.equipment} str="Equipment" />
        </div>
      </div>
    </>
  );
}

export default App;

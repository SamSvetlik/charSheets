

const Skill = (props) => {

    const { profArray, proficiencyBonus, getAbilityModifier, stats } = props;
    const allArray = [
        "Acrobatics",
        "Animal Handling",
        "Arcana",
        "Athletics",
        "Deception",
        "History",
        "Insight",
        "Intimidation",
        "Investigation",
        "Medicine",
        "Nature",
        "Perception",
        "Performance",
        "Persuasion",
        "Religion",
        "Sleight of Hand",
        "Stealth",
        "Survival"
    ]

    function getAbilityFromSkill(skill) {
        switch(skill) {
          case 'Acrobatics':
          case 'Sleight of Hand':
          case 'Stealth':
            return 'DEX';
          case 'Animal Handling':
          case 'Insight':
          case 'Medicine':
          case 'Perception':
          case 'Survival':
            return 'WIS';
          case 'Arcana':
          case 'History':
          case 'Investigation':
          case 'Nature':
          case 'Religion':
            return 'INT';
          case 'Athletics':
            return 'STR';
          case 'Deception':
          case 'Intimidation':
          case 'Performance':
          case 'Persuasion':
            return 'CHA';
          default:
            return 'Invalid skill';
        }
      }

    return (
        <div className={props.className}>
            <ul>
                {allArray.map((entry, index)=> {
                    let mod = getAbilityModifier(stats[getAbilityFromSkill(entry)])
                    function diceRoll() {
                      if (profArray.includes(entry)) {
                        alert(Math.floor(Math.random() * 20) + 1 + proficiencyBonus+ mod)
                      } else alert(Math.floor(Math.random() * 20) + 1 + mod)
                    }
                    return (
                    <li key={index} className={profArray.includes(entry) 
                        ? "bubbled" 
                        : "notBubbled"} >
                        <u>{profArray.includes(entry)
                        ? mod + proficiencyBonus
                        : mod
                        }</u> {entry}
                        <button onClick={diceRoll} >🎲</button>
                    </li>
                )
                })}
            </ul>
            <h2 className="bottomLabel">Skills</h2>
        </div>
    )
}

export default Skill
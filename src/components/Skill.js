

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
        <div>
            <ul>
                {allArray.map((entry, index)=> {
                    return (
                    <li key={index} className={profArray.includes(entry) 
                        ? "bubbled" 
                        : "notBubbled"} >
                        <u>{profArray.includes(entry)
                        ? getAbilityModifier(stats[getAbilityFromSkill(entry)]) + proficiencyBonus
                        : getAbilityModifier(stats[getAbilityFromSkill(entry)])
                        }</u> {entry}
                    </li>
                )
                })}
            </ul>
            <h2 className="bottomLabel">Skills</h2>
        </div>
    )
}

export default Skill
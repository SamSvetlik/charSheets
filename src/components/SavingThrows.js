

const SavingThrows = (props) => {

    const { profArray, proficiencyBonus, getAbilityModifier, stats } = props;
    const allArray = Object.keys(stats)


    return (
        <div className={props.className}>
            <ul>
                {allArray.map((entry, index)=> {
                    let mod = getAbilityModifier(stats[entry])
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
                        <button onClick={diceRoll}>🎲</button>
                    </li>
                )
                })}
            </ul>
            <h2 className="bottomLabel">Saving Throws</h2>
        </div>
    )
}

export default SavingThrows
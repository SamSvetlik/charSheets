

const SavingThrows = (props) => {

    const { profArray, proficiencyBonus, getAbilityModifier, stats } = props;
    const allArray = Object.keys(stats)


    return (
        <div>
            <ul>
                {allArray.map((entry, index)=> {
                    return (
                    <li key={index} className={profArray.includes(entry) 
                        ? "bubbled" 
                        : "notBubbled"} >
                        <u>{profArray.includes(entry)
                        ? getAbilityModifier(stats[entry]) + proficiencyBonus
                        : getAbilityModifier(stats[entry])
                        }</u> {entry}
                    </li>
                )
                })}
            </ul>
            <h2>Saving Throws</h2>
        </div>
    )
}

export default SavingThrows
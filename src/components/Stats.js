import React from "react"

const Stats = (props) => {

    // Want to add a dice roll?  use this:  onClick={()=> { alert(Math.floor(Math.random() * 20) + 1 + props.getAbilityModifier(item[1]))}}

    return (
        <div className={props.className}>
            {Object.entries(props.stats).map((item, index) => {
                return (
                    <div className="statbox" key={index}>
                        <p>{item[0]}</p>
                        <h2>{item[1]}</h2>
                        <h3>{props.getAbilityModifier(item[1])}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Stats
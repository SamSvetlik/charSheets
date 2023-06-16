import { useState } from "react"
export default function NumberComponent(props){
    // There are a few boxes on the character sheet that display only a number and a bit of text.
    // This component is used for Proficiency Bonus, Armor Class, Initiative, Speed, Current and Temporary HP, Hit Dice, and Passive Perception.
    // You should pass it two props: The number, and a string to be rendered near it.
    // Styling will be done later through classnames.

    // Incrementing and decrementing currently alters maxHP and tempHP properties on the character.
    // Consider making a different component for maxHP that displays the max, but mutates a second number for current.
    const [num, setNum] = useState(props.num)
    return (
        <div className={props.className}>
            <p>{num}</p>
            {props.primary
                ? <button onClick={()=> {props.primary(num, setNum)}} >+</button>
                : null
            }
            {props.secondary
                ? <button onClick={()=> {props.secondary(num, setNum)}} >-</button>
                : null
            }
            
            <h2 className="bottomLabel">{props.str}</h2>
        </div>
    )
}
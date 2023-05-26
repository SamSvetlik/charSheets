import { useState } from "react"
export default function NumberComponent(props){
    // There are a few boxes on the character sheet that display only a number and a bit of text.
    // This component is used for Proficiency Bonus, Armor Class, Initiative, Speed, Current and Temporary HP, Hit Dice, and Passive Perception.
    // You should pass it two props: The number, and a string to be rendered near it.
    // Styling will be done later through classnames.

    // Unfinished: Buttons that execute function based on props
    // IE incrementing/decrementing health, rolling dice


    const [num, setNum] = useState(props.num)
    const decrement = () => {
        let copy = num
        copy --
        setNum(copy)
    }
    return (
        <div className={props.className}>
            <p>{num}</p>
            {props.primary === "decrement"
                ? <button onClick={decrement} >X</button>
                : null
            }
            <h2 className="bottomLabel">{props.str}</h2>
        </div>
    )
}

export default function NumberComponent(props){
    // There are a few boxes on the character sheet that display only a number and a bit of text.
    // This component is used for Proficiency Bonus, Armor Class, Initiative, Speed, Current and Temporary HP, Hit Dice, and Passive Perception.
    // You should pass it two props: The number, and a string to be rendered near it.
    // Styling will be done later through classnames.
    return (
        <div className={props.className}>
            <p>{props.num}</p>
            <h2 className="bottomLabel">{props.str}</h2>
        </div>
    )
}
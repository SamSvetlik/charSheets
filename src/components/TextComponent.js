

export default function TextComponent(props){
    return (
        <div className={props.className}>
            <ul>{props.arr.map((element, index)=> {
                return (
                Array.isArray(element)
                ? <TextComponent className="gold" arr={element} str={null}/>
                : <li key={index}>{element}</li>)})}
            </ul>
            <h2 className="bottomLabel">{props.str}</h2>
        </div>
    )
}
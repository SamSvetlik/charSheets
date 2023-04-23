

export default function TextComponent(props){
    return (
        <div>
            <ul>{props.arr.map((element, index)=> {
                return (
                Array.isArray(element)
                ? <TextComponent className="gold" arr={element} str={null}/>
                : <li key={index}>{element}</li>)})}
            </ul>
            <h2>{props.str}</h2>
        </div>
    )
}


export default function TextComponent(props){
    return (
        <div>
            <ul>{props.arr.map((element, index)=> {return <li key={index}>{element}</li>})}</ul>
            <h2>{props.str}</h2>
        </div>
    )
}
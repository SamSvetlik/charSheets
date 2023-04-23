

export default function Attacks(props) {

    return (
        <div>
            <ul>
            {props.attacks.map((attack, index) => {
                return (<li key={index}>
                    <span>{attack.name}</span>
                    <span>{attack.bonus}</span>
                    <span>{attack.damage}</span>
                    {attack.special ?<div>{attack.special}</div> : null }
                </li>)
            })}
            </ul>
            <h2>Attacks & Spellcasting</h2>
        </div>
    )
}
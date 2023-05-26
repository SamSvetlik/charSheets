

const CharInfo = (props) => {
        let result = []
        for (const property in props.info) {
            result.push(
                <span >
                    {property.toUpperCase()}: {props.info[property]}
                </span>
            )
        }
        return <div className="charInfo"> {result} </div>
    
}

export default CharInfo
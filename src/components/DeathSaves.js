
export default function DeathSaves(props) {

    function checkbox (labelName) {
        return <input type="checkbox" className="checkbox" name={labelName} ></input>
    }
    return (
        <div className={props.className}>
            <form>
                <label>Successes</label>
                    {checkbox("success")}
                    {checkbox("success")}
                    {checkbox("success")}
                <br />
                <label>Failures</label>
                    {checkbox("failure")}
                    {checkbox("failure")}
                    {checkbox("failure")}
            </form>
            <h2 className="bottomLabel">Death Saves</h2>
        </div>
    )
}
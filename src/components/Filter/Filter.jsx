export const Filter = ({value,onChange}) => {
    return (
        <label>
            Find Contacts: 
            <input type="text" name="filter" value={value} onChange={onChange}></input>
        </label>
    )
}
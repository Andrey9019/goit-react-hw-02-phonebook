export const PhoneListItem = ({id,firstName,number,onRemove}) => {
    return (
        <li key={id} >
      {firstName}: {number}
      <button onClick={() => onRemove(id)}>
        Remove
      </button>
    </li>
)
}
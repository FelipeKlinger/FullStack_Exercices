const Persons = ({person, deleteOne}) => {

    return (

        <div>
        <li>
        {person.name} {person.number}
        <button onClick={deleteOne}>Eliminar</button>
        </li>
        </div>
    )


}

export default Persons
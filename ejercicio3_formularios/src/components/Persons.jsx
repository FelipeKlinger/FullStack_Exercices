const Persons = ({person, deleteOne}) => {

    return (

        <div>
        <li>
        {person.name} {person.number}
        <button className="button is-warning" onClick={deleteOne}>Eliminar</button>
        </li>
        </div>
    )


}

export default Persons
const Persons = ({ personsToshow }) => {

    return (

        <div>
            <ul>
                {personsToshow.map(person =>
                    <li key={person.id}>
                        {person.name}
                        {person.number}
                    </li>
                )}
            </ul>
        </div>

    )


}

export default Persons
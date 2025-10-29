const PersonForm = ({ numberPhone, newName, handleNoteChange, handleNumberPhone, addPerson }) => {

    return (

        <form onSubmit={addPerson} >
            <div>
                Name: <input value={newName} onChange={handleNoteChange} /> <br />
                Phone: <input value={numberPhone} onChange={handleNumberPhone} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
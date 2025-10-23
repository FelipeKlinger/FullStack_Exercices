import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}> {text}
    </button>
)

const App = () => {


    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(() => new Array(anecdotes.length).fill(0)) //inicializo un array con la misma longitud que anecdotes lleno de ceros

    const randomAnecdote = () => {

        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const handleVote = () => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes) // settea el array al array Votes, hace que la copia se le pase al array del estado
    }

    const MostVotes = () => {
        // Encontrar el valor máximo de votos
        const maxVotes = Math.max(...votes)
        // Encontrar el índice (posición) de la anécdota con más votos
        const maxIndex = votes.indexOf(maxVotes)

        if (maxVotes === 0) {
            return <div>
                <p>No votes given</p>
            </div>
        } else {
            return <div>

                <p>{anecdotes[maxIndex]}</p>
                <p>has {maxVotes} votes</p>
            </div>


        }
    }

        return (

            <div>
                <h1>Anecdote of the day</h1>
                <p>{anecdotes[selected]}</p>
                <p>has {votes[selected]} votes</p>
                <Button handleClick={randomAnecdote} text="next anecdote" />
                <Button handleClick={handleVote} text="vote" />
                <h1>Anedocte with most votes</h1>
                <MostVotes />

            </div>
        )
    }

    export default App
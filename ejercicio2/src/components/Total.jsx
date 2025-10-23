
const Total = ({parts}) => {

    const total = parts.reduce((sum, part) => sum + part.id, 0)

    return(
        
        <p>Number of exercises {total}</p>
    
    )

}

export default Total

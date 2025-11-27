const Notification = ({ messege }) => {

    if (messege == null) {
        return null;
    }
    
    const className = messege.type === 'error' ? 'error' : 'añadido';
    
    return (
        <div className={className}>
            <p>{messege.text}</p>
        </div>
    )
}

export default Notification
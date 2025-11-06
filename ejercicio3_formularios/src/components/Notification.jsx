const Notification = ({ messege }) => {

    if (messege == null) {
        return messege = null;
    }
    return (
        <div className="añadido">
            <p>{messege}</p>
        </div>
    )
}

export default Notification
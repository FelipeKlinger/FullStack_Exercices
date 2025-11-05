const Notification = ({messege}) => {

        if (messege === null) {
           return null
        }

        return (
            <div className="error"> 
            {messege}
            </div>
        )
}

export default Notification
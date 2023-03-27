import './../App.css'

const User = (props) => {

    return(
        <div className = {`${props.user.available ? 'active-user' : 'inactive-user'} user` } onDoubleClick = {() => props.deleteUser(props.user.id)} onClick = {() => props.changeActiveStatus(props.user.id)}>
            <div className="info-1"><h3>{props.user.name}</h3></div>
            <div className="info-2">{props.user.age}yo, {props.user.location}</div>
            <div>
            {props.user.available  ? 'Available' : 'NA'}
            </div>
        </div>
    )
}

export default User
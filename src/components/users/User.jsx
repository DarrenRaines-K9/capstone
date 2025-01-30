import "./User.css"

export const User = ({ user }) => {
    return (
        <div className="user">
            <div>
                <div className="user-info">{user.fullName}</div>
            </div>
            <div>
                <div className="user-info">{user.email}</div>          
            </div>
        </div>
    )
}
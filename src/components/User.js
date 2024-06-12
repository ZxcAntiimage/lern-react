import * as React from "react";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";


class User extends React.Component {

    render() {
        return(
            <div className='user' >
                <IoCloseCircleSharp className="delete-icon"/>
                <IoHammerSharp className="edit-icon"/>
                <h2>{this.props.user.firstName} {this.props.user.lastName}</h2>
                <p>{this.props.user.Bio}</p>
                <p>{this.props.user.age}</p>
                <b>{this.props.user.isHappy ? "Счастлив" : "Не счастлив"}</b>
            </div>
        )
    }
}

export default User;


import { Button } from "semantic-ui-react";
import { UserDto } from "../../models/userDto";
import apiConnector from "../../api/apiConnector";
import { NavLink } from "react-router-dom";

interface Props {
    user: UserDto;
}

export default function userTableItem({user}: Props){
    return(
        <>
            <tr className="center aligned">
                <td data-label="Id">{user.id}</td>
                <td data-label="First Name">{user.firstName}</td>
                <td data-label="Last Name">{user.lastName}</td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Action">
                    <Button as={NavLink} to={'editUser/'+ user.id} color="yellow" type="submit">
                        Edit
                    </Button>
                    <Button type="button" negative onClick={async () =>{
                        await apiConnector.deleteUser(user.id!)
                        window.location.reload()
                    }}>
                        Delete
                    </Button>
                </td>




            </tr>
        </>
    )
}
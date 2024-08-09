import { useEffect, useState } from "react";
import { UserDto } from "../../models/userDto";
import apiConnector from "../../api/apiConnector";
import { Button, Container } from "semantic-ui-react";
import UserTableItem from "./UserTableItem";
import { NavLink } from "react-router-dom";

export default function UserTable() {
    const [users, setUsers] = useState<UserDto[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const fetchedUsers = await apiConnector.getUsers();
            console.log(fetchedUsers)
            setUsers(fetchedUsers);
        }
        fetchData();
    }, []);
    //console.log(users);

    return(
        <>
        <Container className="container-style">
            <table className="ui inverted table">
                <thead style = {{textAlign : 'center'}}>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length !== 0 && (
                        users.map((user, index) => (
                            <UserTableItem key={index} user={user}/>
                        ))
                    )}
                </tbody>

            </table>
            <Button as={NavLink} to="createUser" floated="right" type="button" content="Create User" positive/>
        </Container>
        </>
    )
}
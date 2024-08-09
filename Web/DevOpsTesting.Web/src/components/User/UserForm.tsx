import { ChangeEvent, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { UserDto } from "../../models/userDto";
import apiConnector from "../../api/apiConnector";
import { Button, Form, Segment } from "semantic-ui-react";

export default function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserDto>({
    id: undefined,
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      apiConnector.getUserById(id).then((user) => setUser(user!));
    }
  }, [id]);

  function handleSubmit() {
    if (!user.id) {
      apiConnector.createUser(user).then(() => navigate("/"));
    } else {
      apiConnector.editUser(user).then(() => navigate("/"));
    }
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <Segment clearing inverted>
      <Form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="ui inverted form"
      >
        <Form.Input
          placeholder="First Name"
          name="firstName"
          value={user.firstName}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Last Name"
          name="lastName"
          value={user.lastName}
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          as={NavLink}
          to="/"
          floated="right"
          positive
          type="submit"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}

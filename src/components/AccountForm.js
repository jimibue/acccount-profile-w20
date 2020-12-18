import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider";

const AccountForm = (props) => {
  const [username, setUsername] = useState(defaultUsername);
  const [membershipLevel, setMembershipLevel] = useState(
    defaultMembershipLevel
  );
  const {
    updateAccountYo,
    username: defaultUsername,
    membershipLevel: defaultMembershipLevel,
  } = useContext(AccountContext);

  // semantic way to input/select events in one function
  // handleChange = (e, { name, value }) => this.setState({ [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAccountYo({
      username,
      membershipLevel,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="New Username"
        type="text"
        name="username"
        value={username}
        onChange={(e, { value }) => {
          setUsername(value);
        }}
      />
      <Form.Select
        label="Membership Level"
        name="membershipLevel"
        value={membershipLevel}
        onChange={(e, { value }) => {
          setMembershipLevel(value);
        }}
        options={membershipOptions}
      />
      <Form.Button color="blue">Save</Form.Button>
    </Form>
  );
};

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
  { key: "p", text: "Platinum", value: "Platinum" },
];

export default AccountForm;

import React from "react";
import { Form } from "semantic-ui-react";
import { AccountConsumer } from "../providers/AccountProvider";

class AccountForm extends React.Component {
  state = {
    username: this.props.username,
    membershipLevel: this.props.membershipLevel,
  };

  // semantic way to input/select events in one function
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateAccount({
      username: this.state.username,
      membershipLevel: this.state.membershipLevel,
    });
  };

  render() {
    const { username, membershipLevel } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    );
  }
}

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      {(account) => (
        <AccountForm
          {...props}
          username={account.username}
          membershipLevel={account.membershipLevel}
          updateAccount={account.updateAccountYo}
        />
      )}
    </AccountConsumer>
  );
};

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
  { key: "p", text: "Platinum", value: "Platinum" },
];

export default ConnectedAccountForm;

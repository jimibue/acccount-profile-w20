import React from "react";

//setup the intial context
export const AccountContext = React.createContext();
// returns object with consumer/provider

// Create a consumer to export
export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  state = {
    userName: "Fooman",
    dateJoined: "12/23/34",
    membershipLevel: "Silver",
  };

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}

export default AccountProvider;

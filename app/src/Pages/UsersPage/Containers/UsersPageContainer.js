import React from 'react';
import UsersPageLayout from "../Components/Layout";

class UsersPageContainer extends React.Component {
  render() {
    const users = {
      user1: {
        age: 25,
        name: 'Dima',
        city: 'Minsk'
      },
      user2: {
        age: 36,
        name: 'Sasha',
        city: 'New-York'
      },
      user3: {
        age: 20,
        name: 'Masha',
        city: 'Moscow'
      },
    }
    return <UsersPageLayout userList={users}/>;
  }
}

export default UsersPageContainer;
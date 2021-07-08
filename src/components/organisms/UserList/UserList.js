import React from 'react';
import { users } from 'data/users';
import { Wrapper } from './UserList.style';
import UsersListitem from 'components/molecules/UsersListItem/UsersListitem';

const UserList = () => (
  <Wrapper>
    <ul>
      {users.map((userData) => (
        <UsersListitem userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

export default UserList;

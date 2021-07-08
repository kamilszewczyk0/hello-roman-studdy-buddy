import React from 'react';
import { users } from 'data/users';
import { Wrapper } from './UserList.style';
import UsersListItem from 'components/molecules/UsersListItem/UsersListitem';

const UserList = () => (
  <Wrapper>
    <ul>
      {users.map((userData, index) => (
        <UsersListItem index={index} userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

export default UserList;

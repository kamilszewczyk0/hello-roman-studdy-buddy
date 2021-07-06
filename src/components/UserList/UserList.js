import React from 'react';
import { users } from 'data/users';

import UsersListitem from 'components/UsersListItem/UsersListitem';

const UserList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListitem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UserList;

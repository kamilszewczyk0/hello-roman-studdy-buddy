import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import { StyledList, Wrapper } from './UserList.style';
import UsersListItem from 'components/molecules/UsersListItem/UsersListitem';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState(false);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : `User's List`}</h1>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UserList;

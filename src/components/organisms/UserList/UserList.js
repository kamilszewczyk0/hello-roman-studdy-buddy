import React from 'react';
import { StyledList, Wrapper } from './UserList.style';
import UsersListItem from 'components/molecules/UsersListItem/UsersListitem';

export const UserList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <h1>{`User's List`}</h1>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UserList;

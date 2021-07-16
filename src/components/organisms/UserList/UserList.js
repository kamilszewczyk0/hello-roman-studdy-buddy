import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListitem';
import { StyledList } from './UserList.style.js';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UserProvider';

export const UserList = () => {
  const { users } = useContext(UsersContext);
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UserList;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledHeader, StyledAttendace, StyledContent } from './UserListItem.style';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UsersContext } from 'providers/UserProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper key={name}>
      <StyledAverage>{average}</StyledAverage>
      <StyledContent>
        <StyledHeader>{name}</StyledHeader>
        <StyledAttendace>attendance: {attendance}</StyledAttendace>
      </StyledContent>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledHeader, StyledAttendace, StyledContent } from './UserListItem.style';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper key={name}>
    <StyledAverage>{average}</StyledAverage>
    <StyledContent>
      <StyledHeader>{name}</StyledHeader>
      <StyledAttendace>attendance: {attendance}</StyledAttendace>
    </StyledContent>
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;

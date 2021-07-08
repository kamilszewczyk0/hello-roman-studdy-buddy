import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledHeader, StyledAttendace, StyledContent } from './UserListItem.style';
import Button from 'components/atoms/Button/Button';

const showIndex = (index) => alert(`To jest student #${index + 1}`);

const UsersListItem = ({ index, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper key={name}>
    <StyledAverage>{average}</StyledAverage>
    <StyledContent>
      <StyledHeader>{name}</StyledHeader>
      <StyledAttendace>attendance: {attendance}</StyledAttendace>
    </StyledContent>
    <Button onClick={() => showIndex(index)} />
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

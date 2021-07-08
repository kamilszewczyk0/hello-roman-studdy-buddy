import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Average, Header, Attendace, ListElementContent } from './UserListItem.style';
import Button from 'components/atoms/Button/Button';

const UsersListitem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper key={name}>
    <Average>{average}</Average>
    <ListElementContent>
      <Header>{name}</Header>
      <Attendace>attendance: {attendance}</Attendace>
    </ListElementContent>
    <Button />
  </Wrapper>
);

UsersListitem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListitem;

import React from 'react';
import { Wrapper } from 'components/organisms/UserList/UserList.style';
import FormField from 'components/molecules/FormField/FormField';
import { StyledHeader } from 'components/molecules/UsersListItem/UserListItem.style';
import { Button } from 'components/atoms/Button/Button';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledHeader>Add new student</StyledHeader>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  );
};

export default Form;

import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem,
  DeleteButton,
} from 'components/contactListItem/ContactListItem.styled';

export const ContactListItem = ({ name, number, onDeleteContact, id }) => (
  <ListItem>
    {name} : {number}
    <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
  </ListItem>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

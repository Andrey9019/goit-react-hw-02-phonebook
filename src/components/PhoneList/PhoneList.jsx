import React from 'react';
import { PhoneListItem } from 'components/PhoneListItem/PhoneListItem';

export const PhoneList = ({ contacts, onRemove }) => {
  return (
    <ul>
      {contacts.map(({ firstName, number, id }) => (
        <PhoneListItem
          key={id}
          id={id}
          firstName={firstName}
          number={number}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};


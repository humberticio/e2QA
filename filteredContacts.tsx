import React from 'react';
import ContactsTableRow from 'src/sections/@dashboard/user/list/ContactsTableRow.js'
import { IUserAccountGeneral } from '../../../@types/user';

interface FilteredContactsProps {
  contacts: IUserAccountGeneral[];
}

const FilteredContacts: React.FC<FilteredContactsProps> = ({ contacts }) => {
  const filteredContacts = contacts.filter(contact => contact.categoryId !== '');

  return (
    <>
      {filteredContacts.map((contact, index) => (
        <ContactsTableRow
          key={index}
          row={contact}
          selected={false}
          onEditRow={() => {}}
          onSelectRow={() => {}}
          onDeleteRow={() => {}}
          items={[]}
        />
      ))}
    </>
  );
}

export default FilteredContacts;
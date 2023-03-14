import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "redux/contacts/contacts-selector"
import { getFilter } from 'redux/filter/filter-selector';
import { removeContact } from "redux/contacts/contacts-slice";
import css from "../Phonebook.module.css"

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const getFiltereContacts = () => {
          if (!filter) {
              return contacts;
          }
          const normalizedFilter = filter.toLocaleLowerCase();
          const filteredContacts = contacts.filter(({ name, number }) => {
              const normalizedName = name.toLocaleLowerCase();
              const normalizedNumber = number.toLocaleLowerCase();
              const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
              return result;
          })
          return filteredContacts;
    }
    const filterContacts = getFiltereContacts();

    const handleDelete = (id) => {
        dispatch(removeContact(id));
    }

    const element = filterContacts.map(({name, number, id}) => {
        return <li key={id}>{name}: {number} <span className={css.remove} onClick={() => handleDelete(id)}>Delete</span></li>
    })
  return (
    <ul>{element}</ul>
  )
}

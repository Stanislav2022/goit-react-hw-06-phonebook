import React, { useState, useEffect } from 'react';
import css from "./Phonebook.module.css";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { setFilter, addContats, removeContact } from 'redux/actions';



export default function Phonebook() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();


    // const [contacts, setContacts] = useState(() => {
    //     const value = JSON.parse(localStorage.getItem("contacts"));
    //     return value ?? [];
    // });
    // const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));    
    }, [contacts])

    const onAddContats = (data) => {
          if (isDuplicate(data)) {
            return alert(`${data.name} - is already in contacts`)
        }
        const action = addContats(data);
        dispatch(action);
    };

    const onRemoveContact = (id) => {
        const action = removeContact(id);
        dispatch(action);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value))
    };

    const isDuplicate = ({name}) => {
        const result = contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase())
        return result
    }

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

    return (
        <>
            <div className={css.form}>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={onAddContats} />
            </div>
            <div className={css.form}>
                <h2>Contacts</h2>
                <Filter filter={ filter} handleChange={handleChange}  />
                <ContactList items={filterContacts} removeContact={onRemoveContact} />
            </div>
       </>
    )
}

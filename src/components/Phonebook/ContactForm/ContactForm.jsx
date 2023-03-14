import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'
import { addContact } from 'redux/contacts/contacts-slice';
import { getContacts } from 'redux/contacts/contacts-selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "../Phonebook.module.css"

export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const onAddContacts = (contact) => {
        if (!isDuplicate(contact)) {
          const action = addContact(contact);
          return  dispatch(action);
        }
          const notify = () => toast(`${contact.name} - is already in contacts`);
          notify()
    };

    const isDuplicate = ({name}) => {
        const result = contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase())
        return result
    }

    const handleSubmite = (e) => {
        e.preventDefault()
        const form = e.target;
        const contact = { "name": form.elements.name.value, "number": form.elements.number.value }
        onAddContacts(contact);
        form.reset();
    };    

    const nameId = nanoid();
    const numberId = nanoid();

    return (
        <>
            <form onSubmit={handleSubmite}>
                <div>
                    <label htmlFor={nameId}> Name </label>
                    <input
                        className={css.input}
                        id={nameId}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
                </div>
                <div>
                    <label htmlFor={numberId} > Number </label>
                    <input
                        className={css.input}
                        id={numberId}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
                </div>
                <button>Add contact</button>
            </form>
            <ToastContainer />
        </>
    )
}


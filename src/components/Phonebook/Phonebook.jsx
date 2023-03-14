import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from "./Phonebook.module.css";

export const Phonebook = () => {
    return (
        <>
            <div className={css.form}>
                <h1>Phonebook</h1>
                <ContactForm />
            </div>
            <div className={css.form}>
                <h2>Contacts</h2>
                <Filter/>
                <ContactList />
                
            </div>
       </>
    )
}

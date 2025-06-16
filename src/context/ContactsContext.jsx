import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";

const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.getContacts().then(setContacts);
  }, []);

  const add = async (contact) => {
    const newContact = await api.addContact(contact);
    setContacts(prev => [...prev, newContact]);
  };

  const update = async (id, updatedContact) => {
    const result = await api.updateContact(id, updatedContact);
    setContacts(prev => prev.map(c => c.id === id ? result : c));
  };

  const remove = async (id) => {
    await api.deleteContact(id);
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  return (
    <ContactsContext.Provider value={{ contacts, add, update, remove }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);
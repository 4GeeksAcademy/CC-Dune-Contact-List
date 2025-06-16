import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContacts } from "../context/ContactsContext";

export const ContactForm = () => {
  const { contacts, add, update } = useContacts();
  const navigate = useNavigate();
  const { id } = useParams();
  const editing = Boolean(id);

  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });

  useEffect(() => {
    if (editing) {
      const contact = contacts.find(c => c.id === parseInt(id));
      if (contact) setForm(contact);
    }
  }, [id, contacts]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    editing ? await update(id, form) : await add(form);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{editing ? "Edit Contact" : "Add a new contact"}</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        {['name', 'email', 'phone', 'address'].map(field => (
          <div className="mb-3" key={field}>
            <input
              className="form-control"
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              required
            />
          </div>
        ))}
        <button className="btn btn-primary w-100">save</button>
        <p className="mt-3 text-center">
          <a onClick={() => navigate("/")} role="button">or get back to contacts</a>
        </p>
      </form>
    </div>
  );
};

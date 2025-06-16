// File: /src/pages/ContactList.jsx
import React from "react";
import { useContacts } from "../context/ContactsContext";
import { Link } from "react-router-dom";

export const ContactList = () => {
  const { contacts, remove } = useContacts();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <Link to="/new" className="btn btn-success">
          Add new contact
        </Link>
      </div>
      {contacts.map((c) => (
        <div
          key={c.id}
          className="card mb-3 p-3 d-flex flex-row align-items-center"
        >
          <img
            src="https://image-placeholder.com/images/actual-size/75x75.png"
            className="rounded-circle me-3"
            alt="profile"
          />
          <div className="flex-grow-1">
            <h5>{c.name}</h5>
            <p className="mb-0">
              <i className="fa fa-map-marker-alt me-2"></i>
              {c.address}
            </p>
            <p className="mb-0">
              <i className="fa fa-phone me-2"></i>
              {c.phone}
            </p>
            <p className="mb-0">
              <i className="fa fa-envelope me-2"></i>
              {c.email}
            </p>
          </div>
          <div>
            <Link to={`/edit/${c.id}`}>
              <i className="fa fa-pen me-3"></i>
            </Link>
            <i
              className="fa fa-trash text-danger"
              role="button"
              onClick={() => remove(c.id)}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactList } from "./pages/ContactList";
import { ContactForm } from "./pages/ContactForm";
import { ContactsProvider } from "./context/ContactsContext";

const Main = () => {
  return (
    <React.StrictMode>
      <StoreProvider>
        <RouterProvider router={router}></RouterProvider>
      </StoreProvider>
    </React.StrictMode>
  );
};

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/new" element={<ContactForm />} />
          <Route path="/edit/:id" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </ContactsProvider>
  </React.StrictMode>
);

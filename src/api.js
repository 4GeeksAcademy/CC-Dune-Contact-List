const API_BASE = "https://playground.4geeks.com/contact/";
const AGENDA_SLUG = "cc_dune";

export const api = {
    getContacts: async () => {
        const res = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts`);
        const data = await res.json();
        return data.contacts;
    },

    addContact: async (contact) => {
        const res = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        });
        return await res.json();
    },

    updateContact: async (id, contact) => {
        const res = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        });
        return await res.json();
    },

    deleteContact: async (id) => {
        await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts/${id}`, { method: "DELETE" });
    }
};
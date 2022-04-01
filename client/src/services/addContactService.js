import http from "./http";

export function addContact(data) {
    http.post('/contacts', { ...data });
}
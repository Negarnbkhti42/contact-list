import http from "./http";

export function addContact(data) {
    return http.post('/contacts', { ...data });
}
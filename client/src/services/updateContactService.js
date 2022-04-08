import http from "./http";

export function updateContact(id, data) {
    return http.put(`/contacts/${id}`, data);
}
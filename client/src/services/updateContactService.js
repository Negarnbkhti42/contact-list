import http from "./http";

export function updateContact(id, data) {
    return http.patch(`/contacts/${id}`, data);
}
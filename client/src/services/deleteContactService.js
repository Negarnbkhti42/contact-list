import http from "./http";

export function deleteContact(id) {
    return http.delete(`/contacts/${id}`);
}
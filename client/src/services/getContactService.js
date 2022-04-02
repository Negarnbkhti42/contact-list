import http from "./http";

export function getContact(id) {
    return http.get(`/contacts/${id}`)
        .then(res => res.data);
}
import { NoteTypes } from "../types/NoteTypes";

const BASE_API = "http://localhost:4001/api";

export const Api = {
    getAll: async () => {
        let response = await fetch(BASE_API);
        let json = await response.json();
        return json;
    },

    getOneNote: async (id: string | undefined) => {
        let response = await fetch(`${BASE_API}/note/${id}`);
        let json = await response.json();
        return json;
    },

    addNote: async ({ title, content, bg_color, text_color }: NoteTypes) => {
        let response = await fetch(`${BASE_API}/note`, {
            method: "POST",
            body: JSON.stringify({ title, content, bg_color, text_color }),
            headers: { "Content-Type": "application/json" },
        });
        let json = await response.json();
        return json;
    },

    updateNote: async ({
        id,
        title,
        content,
        bg_color,
        text_color,
    }: NoteTypes) => {
        let response = await fetch(`${BASE_API}/note/${id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content, bg_color, text_color }),
            headers: { "Content-Type": "application/json" },
        });
        let json = await response.json();
        return json;
    },

    deleteNote: async (id?: number | string) => {
        let response = await fetch(`${BASE_API}/note/${id}`, {
            method: "DELETE",
        });
        let json = await response.json();
        return json;
    },
};

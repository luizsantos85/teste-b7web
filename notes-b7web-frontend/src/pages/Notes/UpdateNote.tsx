import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NoteTypes } from "../../types/NoteTypes";
import { PageTitle } from "../../components/PageTitle";
import { Api } from "../../services";

import styles from "./notecreate.module.css";
import { FormPost } from "../../components/FormPost";

export const UpdateNote = () => {
    const { id } = useParams();

    const [note, setNote] = useState<NoteTypes>();
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async ({
        id,
        title,
        content,
        bg_color,
        text_color,
    }: NoteTypes) => {
        await Api.updateNote({ id, title, content, bg_color, text_color });
        window.location.href = "/";
    };

    useEffect(() => {
        const loadNote = async () => {
            setLoading(true);
            let json = await Api.getOneNote(id);
            setNote(json);
            setLoading(false);
        };
        loadNote();
    }, [id]);

    if (loading) return <h1>Carregando...</h1>;

    return (
        <div className={styles.createNote}>
            <PageTitle title="Editar Nota" />

            <form method="POST">
                <FormPost onActionNote={handleFormSubmit} data={note} />
            </form>
        </div>
    );
};

import { useNavigate } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { FormPost } from "../../components/FormPost";
import { Api } from "../../services";

import styles from "./notecreate.module.css";
import { NoteTypes } from "../../types/NoteTypes";

export const NoteCreate = () => {
    const navigate = useNavigate();

    const handleFormSubmit = async ({
        title,
        content,
        bg_color,
        text_color,
    }: NoteTypes) => {
        await Api.addNote({ title, content, bg_color, text_color });
        navigate("/");
    };

    return (
        <div className={styles.createNote}>
            <PageTitle title="Adicionar Nota" />

            <form method="POST">
                <FormPost onActionNote={handleFormSubmit} />
            </form>
        </div>
    );
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoteTypes } from "../../types/NoteTypes";
import { PageTitle } from "../../components/PageTitle";
import { Api } from "../../services";

import styles from "./index.module.css";

export const Notes = () => {
    const [notes, setNotes] = useState<NoteTypes[]>([]);
    const [loading, setLoading] = useState(false);

    const loadNotes = async () => {
        setLoading(true);
        let json = await Api.getAll();
        setNotes(json);
        setLoading(false);
    };

    const handleButtonDelete = () => {
        alert("ID: ");
    };

    useEffect(() => {
        loadNotes();
    }, []);

    return (
        <div className={styles.pageNotes}>
            <PageTitle
                title="Página Principal de Notas"
                subTitle="Subtitle opcional"
            />

            <div className={styles.notesContent}>
                {loading && <h1> Carregando Notas... </h1>}

                {notes.map((note) => (
                    <div
                        className={styles.boxCards}
                        style={{
                            color: note.text_color,
                            backgroundColor: note.bg_color,
                        }}
                        key={note.id}
                    >
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>

                        <div className={styles.buttons}>
                            <Link to={`/edit/${note.id}`}>Editar</Link>
                            <button onClick={()=>{}}>
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

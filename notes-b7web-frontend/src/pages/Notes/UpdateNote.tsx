import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NoteTypes } from "../../types/NoteTypes";
import { PageTitle } from "../../components/PageTitle";
import { Api } from "../../services";

import styles from "./notecreate.module.css";

export const UpdateNote = () => {
    const navigate = useNavigate();
    let id = useParams();

    const [note, setNote] = useState<NoteTypes>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [bg_color, setBgColor] = useState("#ffffff");
    const [text_color, setTextColor] = useState("#000000");

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await Api.updateNote({title, content, bg_color, text_color });
        navigate("/");
    };

    const handleBackButton = () => {
        navigate(-1)
    }

    
    useEffect(() => {
        const loadNote = async () => {
            let json;
            
            setLoading(true);
            try {
                json = await Api.getOneNote(id);
                setLoading(false);
                setNote(json);
                if (json.error) throw new Error(json.error);
            } catch (err) {
                setLoading(false);
                setError(json.error);
            }
        };
        loadNote();
    }, [id]);

    return (
        <div className={styles.createNote}>
            <PageTitle title="Editar Nota" />

            <form method="POST" onSubmit={handleFormSubmit}>
                {note && (
                    <div className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="title">Título da nota</label>
                            <input
                                type="text"
                                id="title"
                                value={note.title}
                                onChange={({ target }) => {
                                    setTitle(target.value);
                                }}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="content">Conteúdo da nota</label>
                            <textarea
                                name="content"
                                id="content"
                                value={content}
                                onChange={({ target }) => {
                                    setContent(target.value);
                                }}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="textColor">Cor do texto</label>
                            <input
                                type="color"
                                id="textColor"
                                value={text_color}
                                onChange={({ target }) => {
                                    setTextColor(target.value);
                                }}
                            />
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="bgColor">Cor de fundo</label>
                            <input
                                type="color"
                                id="bgColor"
                                value={bg_color}
                                onChange={({ target }) => {
                                    setBgColor(target.value);
                                }}
                            />
                        </div>

                        <button>Editar</button>
                        <button
                            onClick={handleBackButton}
                            className={styles.back}
                        >
                            Cancelar
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

import { useState, FormEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NoteTypes } from "../../types/NoteTypes";
import { PageTitle } from "../../components/PageTitle";
import { Api } from "../../services";

import styles from "./notecreate.module.css";

export const UpdateNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState<NoteTypes>();
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [bg_color, setBgColor] = useState("#ffffff");
    const [text_color, setTextColor] = useState("#000000");

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await Api.updateNote({ id, title, content, bg_color, text_color });
        window.location.href = "/";
    };

    const handleBackButton = () => {
        navigate(-1);
    };

    useEffect(() => {
        const loadNote = async () => {
            setLoading(true);
            let json = await Api.getOneNote(id);
            setTitle(json.title);
            setContent(json.content);
            setBgColor(json.bg_color);
            setTextColor(json.text_color);
            setNote(json);
            setLoading(false);
        };
        loadNote();
    }, [id]);

    if (loading) return <h1>Carregando...</h1>;

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
                                value={title}
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

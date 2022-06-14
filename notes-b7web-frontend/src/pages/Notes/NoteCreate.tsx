import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { Api } from "../../services";

import styles from "./notecreate.module.css";

export const NoteCreate = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [bg_color, setBgColor] = useState("#ffffff");
    const [text_color, setTextColor] = useState("#000000");

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await Api.addNote({ title, content, bg_color, text_color });
        navigate("/");
    };

    return (
        <div className={styles.createNote}>
            <PageTitle title="Adicionar Nota" />

            <form method="POST" onSubmit={handleFormSubmit}>
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

                    <button>Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

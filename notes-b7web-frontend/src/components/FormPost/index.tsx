import { useState, useEffect, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NoteTypes } from "../../types/NoteTypes";

import styles from "./styles.module.css";

type ProsForm = {
    onActionNote: ({ title, content, bg_color, text_color }: NoteTypes) => void;
    data?: NoteTypes;
};

export const FormPost = ({ onActionNote, data }: ProsForm) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [bg_color, setBgColor] = useState("#ffffff");
    const [text_color, setTextColor] = useState("#000000");

    useEffect(() => {
        if (data) {
            setTitle(data.title);
            setContent(data.content);
            setBgColor(data.bg_color);
            setTextColor(data.text_color);
        }
    }, [data]);

    const handleClickAction = (e: FormEvent) => {
        e.preventDefault();
        if (title && content) {
            onActionNote({ id, title, content, bg_color, text_color });
        } else {
            alert("O Título e o Conteúdo são obrigatórios!");
        }
    };

    const handleBackButton = () => {
        navigate("/");
    };

    return (
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

            {id ? (
                <>
                    <button onClick={handleClickAction}>Editar</button>
                    <button onClick={handleBackButton} className={styles.back}>
                        Cancelar
                    </button>
                </>
            ) : (
                <button onClick={handleClickAction}>Cadastrar</button>
            )}
        </div>
    );
};

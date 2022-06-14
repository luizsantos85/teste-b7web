import React,{useState} from 'react'
import styles from './styles.module.css';

export const FormPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [bgColor, setBgColor] = useState('');
    const [textColor, setTextColor] = useState('');

    

  return (
     <div className={styles.form}>
        <div className={styles.inputWrapper}>
           <label htmlFor="">Título da nota</label>
           <input type="text" />
        </div>
        <div className={styles.inputWrapper}>
           <label htmlFor="">Conteúdo da nota</label>
           <textarea name="content" id="content"></textarea>
        </div>
        <div className={styles.inputWrapper}>
           <label htmlFor="">Cor do texto</label>
           <input type="color" />
        </div>
        <div className={styles.inputWrapper}>
           <label htmlFor="">Cor de fundo</label>
           <input type="color" />
        </div>

        <button>Cadastrar</button>
     </div>
  );
}

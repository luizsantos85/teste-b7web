import { useState, useEffect, ChangeEvent } from 'react';
import { PageTitle } from '../../components/PageTitle';

import styles from './notecreate.module.css';

export const NoteCreate = () => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [bgColor, setBgColor] = useState('');
   const [textColor, setTextColor] = useState('');

   const handleSubmit = async (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setContent('');
   };

   return (
      <div className={styles.createNote}>
         <PageTitle title="Adicionar Nota" />

         <form className={styles.form}>
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
         </form>
      </div>
   );
};

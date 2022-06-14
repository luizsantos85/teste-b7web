import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NoteTypes } from '../../types/NoteTypes';
import { PageTitle } from '../../components/PageTitle';
import { Api } from '../../services';

import styles from './index.module.css';

export const Notes = () => {
   const [notes, setNotes] = useState<NoteTypes[]>([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const loadNotes = async () => {
      let json;
      setLoading(true);

      try {
         json = await Api.getAll();
         setLoading(false);
         setNotes(json);
         if (json.error) throw new Error(json.error);
      } catch (err) {
         setLoading(false);
         setError(json.error);
      }
   };
    
    const handleButtonDelete = () => {
        alert('ID: ')
    }

   useEffect(() => {
      loadNotes();
   }, []);

   if (error)
      return (
         <div>
            <h1>{error}</h1>
         </div>
      );

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
                           <button onClick={handleButtonDelete}>
                               Excluir
                           </button>
                       </div>
                   </div>
               ))}
           </div>
       </div>
   );
};

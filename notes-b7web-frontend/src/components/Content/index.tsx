import { Routes, Route } from 'react-router-dom'
import {Notes} from '../../pages/Notes'
import { NoteCreate } from '../../pages/Notes/NoteCreate';
import { NotFound } from '../../pages/Notfound'

import styles from './styles.module.css'

export const Content = () => {
  return (
     <section className={styles.content}>
        <Routes>
           <Route path="/" element={<Notes />} />
           <Route path="/add-note" element={<NoteCreate />} />
           <Route path="*" element={<NotFound />} />
        </Routes>
     </section>
  );
}

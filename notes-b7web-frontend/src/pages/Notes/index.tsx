import { Link } from 'react-router-dom';
import { PageTitle } from '../../components/PageTitle';

import styles from './index.module.css';

export const Notes = () => {
   return (
      <div className={styles.pageNotes}>
         <PageTitle title="Página Principal de Notas" subTitle="Subtitle opcional" />

         <div className={styles.notesContent}>
            <div
               className={styles.boxCards}
               style={{ color: '#000', backgroundColor: '#fff' }}
            >
               <h2>Titulo da nota</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae placeat inventore consectetur veniam totam
                  molestias fugiat odit, quam dolores porro perferendis nisi
                  amet esse repellendus, at explicabo fugit? Maxime, minima?
               </p>

               <div className={styles.buttons}>
                  <Link to="">Editar</Link>
                  <Link to="">Excluir</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

import { Link } from 'react-router-dom';
import styles from './styles.module.css'

export const Header = () => {
  return (
     <aside className={styles.menu}>
        <div className={styles.logo}>Teste B7Web</div>
        <nav>
           <ul>
              <li>
                 <Link to="/">Notas</Link>
              </li>
              <li>
                 <Link to="">Adicionar nota</Link>
              </li>

           </ul>
        </nav>
     </aside>
  );
}

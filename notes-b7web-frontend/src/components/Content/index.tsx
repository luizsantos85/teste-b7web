import { Routes, Route } from 'react-router-dom'
import {Notes} from '../../pages/Notes'
import { NotFound } from '../../pages/Notfound'

import styles from './styles.module.css'

export const Content = () => {
  return (
    <section className={styles.content}>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='*' element={ <NotFound />}/>
      </Routes>
    </section>
  )
}

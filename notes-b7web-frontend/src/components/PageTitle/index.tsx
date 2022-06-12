import React from 'react'
import styles from './styles.module.css'

type Props = {
    title: string;
    subTitle?: string;
}

export const PageTitle = ({title,subTitle}: Props) => {
  return (
      <div className={styles.title}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
    </div>
  )
}

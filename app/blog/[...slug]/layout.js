import styles from './styles.module.css'

export default function BlogPageLayout({ children }) {
  return <section className={styles.page}>{children}</section>
}

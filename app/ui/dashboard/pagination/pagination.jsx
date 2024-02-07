import styles from './pagination.module.css'
const Pagination = () => {
    return (
        <div className={styles.container}>
            <button className={styles.paginationBtn} disabled>Previous</button>
            <div className={styles.paginationCount}>Page 1 of 10</div>
            <button className={styles.paginationBtn}>Next</button>
        </div>
    )
}
export default Pagination
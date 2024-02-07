import styles from './footer.module.css'

const Footer = () => {

    return (
        <div className={styles.container}>
            <span className={styles.copyleft}>Copyleft <span className={styles.copyleftIcon}>©</span> 2024 Next Dashboard. FeliDev87 Some rights reserved.</span>
        </div>
    )
}

export default Footer
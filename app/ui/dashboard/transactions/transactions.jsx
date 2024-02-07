import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Last Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th align='left'>Name</th>
                        <th align='left'>Status</th>
                        <th align='left'>Date</th>
                        <th align='center'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src={'/noavatar.png'} 
                                    width={40} 
                                    height={40} 
                                    className={styles.userImg}
                                    alt="user"
                                />
                                <span className={styles.userName}>Feli Doe</span>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pending
                            </span>
                        </td>
                        <td>
                            1 March, 2022
                        </td>
                        <td align='center'>
                            $200
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src={'/noavatar.png'} 
                                    width={40} 
                                    height={40} 
                                    className={styles.userImg}
                                    alt="user"
                                />
                                <span className={styles.userName}>Feli Doe</span>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                Done
                            </span>
                        </td>
                        <td>
                            1 March, 2022
                        </td>
                        <td align='center'>
                            $200
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src={'/noavatar.png'} 
                                    width={40} 
                                    height={40} 
                                    className={styles.userImg}
                                    alt="user"
                                />
                                <span className={styles.userName}>Feli Doe</span>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>
                                Cancelled
                            </span>
                        </td>
                        <td>
                            1 March, 2022
                        </td>
                        <td align='center'>
                            $200
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Transactions
import Image from 'next/image'
import styles from './userstable.module.css'
import Link from 'next/link'

const UsersTable = () => {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th align='left'>Name</th>
                        <th align='left'>Email</th>
                        <th align='left'>Created at</th>
                        <th align='center'>Role</th>
                        <th align='center'>State</th>
                        <th align='center'>Actions</th>
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
                            8g5rP@example.com
                        </td>
                        <td>
                            1 April, 2022
                        </td>
                        <td align='center'>
                            Admin
                        </td>
                        <td align='center'>
                            <span className={styles.active}>Active</span>
                        </td>
                        <td align='center'>
                            <Link href={'/dashboard/users/1'} className={styles.viewBtn}>
                                View
                            </Link>
                            <Link href={'/dashboard/users/1/delete'} className={styles.deletedBtn}>
                                Delete
                            </Link>
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
                                <span className={styles.userName}>Benjamin Doe</span>
                            </div>
                        </td>
                        <td>
                            8gsdasd5rP@example.com
                        </td>
                        <td>
                            1 March, 2023
                        </td>
                        <td align='center'>
                            User
                        </td>
                        <td align='center'>
                            <span className={styles.inactive}>Inactive</span>
                        </td>
                        <td align='center'>
                            <button className={styles.viewBtn}>View</button>
                            <button className={styles.deletedBtn}>Delete</button>
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
                                <span className={styles.userName}>Angel Doe</span>
                            </div>
                        </td>
                        <td>
                            123123@example.com
                        </td>
                        <td>
                            3 June, 2024
                        </td>
                        <td align='center'>
                            User
                        </td>
                        <td align='center'>
                            <span className={styles.deleted}>Deleted</span>
                        </td>
                        <td align='center'>
                            <button className={styles.viewBtn}>View</button>
                            <button className={styles.deletedBtn}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default UsersTable
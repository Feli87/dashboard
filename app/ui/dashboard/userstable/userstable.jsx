import Image from 'next/image'
import styles from './userstable.module.css'
import Link from 'next/link'
import { MdAdminPanelSettings, MdPerson } from 'react-icons/md'

const UsersTable = ({ users }) => {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th align='left'>Username</th>
                        <th align='left'>Email</th>
                        <th align='left'>Created at</th>
                        <th align='center'>Role</th>
                        <th align='center'>State</th>
                        <th align='center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={user.id || index}>
                                <td>
                                    <div className={styles.user}>
                                        <Image
                                            src={user.image || '/noavatar.png'}
                                            width={40}
                                            height={40}
                                            className={styles.userImg}
                                            alt="user"
                                        />
                                        <span className={styles.userName}>{user.username}</span>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.createdAt && new Date(user.createdAt).toLocaleDateString('en-US',{
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    }) || ''}
                                </td>
                                <td align='center'>
                                    {user.role && user.role === 'admin' ? <MdAdminPanelSettings size={30} /> : <MdPerson size={30} />}
                                </td>
                                <td align='center'>
                                    <div className={user.isActive ? styles.userActive : styles.userInactive}>{user.isActive ? 'Active' : 'Inactive'}</div>
                                </td>
                                <td align='center'>
                                    <Link 
                                    href={`/dashboard/users/${user.id}`}  >
                                        <button className={styles.editUserBtn}>
                                            Edit
                                        </button>
                                    </Link>
                                    <Link href={`/dashboard/users/delete/${user.id}`}>
                                        <button className={styles.deletedBtn}>
                                            Delete
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default UsersTable
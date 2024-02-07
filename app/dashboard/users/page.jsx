import styles from '../../ui/dashboard/users.module.css'
import UsersTable from '../../ui/dashboard/userstable/userstable'
import SearchDashboardBar from '../../ui/dashboard/searchdashboardbar/searchdashboardbar'
import Link from 'next/link'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
const Users = () => {
    return (
        <div className={styles.container}>
            <SearchDashboardBar
                placeholder="Search User..."
            >
                <Link
                    role='button' 
                    className={styles.addUserBtn} href="/dashboard/users/add">
                    Add User
                </Link>
            </SearchDashboardBar>
            <UsersTable />
            <Pagination />
        </div>
    )
}
export default Users
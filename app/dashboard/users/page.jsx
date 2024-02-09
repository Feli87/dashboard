import styles from '../../ui/dashboard/users.module.css'
import UsersTable from '../../ui/dashboard/userstable/userstable'
import SearchDashboardBar from '../../ui/dashboard/searchdashboardbar/searchdashboardbar'
import Link from 'next/link'
import Pagination from '../../ui/dashboard/pagination/pagination'
import { fetchUsers } from '../../lib/data'
const Users = async ({searchParams}) => {

    const query = searchParams?.query || '';
    const page = searchParams?.page || 1;
    const {count, users} = await fetchUsers(query, page);

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
            <UsersTable users={users || []}/>
            <Pagination count={count} />
        </div>
    )
}
export default Users
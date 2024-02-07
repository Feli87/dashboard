import styles from './sidebar.module.css'
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdOutlineSettings, MdHelpCenter, MdPeople, MdAnalytics, MdReport, MdLogout } from 'react-icons/md'
import MenuLink from './menuLink/menuLink'
import Image from 'next/image'

const MenuItems = [
    {
        title: 'Pages',
        list: [
            {
                title: 'Dashboard',
                path: '/dashboard',
                icon: <MdDashboard />
            },
            {
                title: 'Users',
                path: '/dashboard/users',
                icon: <MdSupervisedUserCircle />
            },
            {
                title: 'Products',
                path: '/dashboard/products',
                icon: <MdShoppingBag />
            },
            {
                title: 'Transactions',
                path: '/dashboard/transactions',
                icon: <MdAttachMoney />
            }
        ]
    },
    {
        title: 'Analytics',
        list: [
            {
                title: 'Revenue',
                path: '/dashboard/revenue',
                icon: <MdAnalytics   />
            },
            {
                title: 'Reports',
                path: '/dashboard/reports',
                icon: <MdReport />
            },
            {
                title: 'Teams',
                path: '/dashboard/teams',
                icon: <MdPeople />
            }
        ]
    },
    {
        title: 'Users',
        list: [
            {
                title: 'Settings',
                path: '/dashboard/settings',
                icon: <MdOutlineSettings />
            },
            {
                title: 'help',
                path: '/dashboard/help',
                icon: <MdHelpCenter />
            }
        ]
    }
]
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topLogo}>
                <h1 className={styles.logo}>Next Dashboard</h1>
                <span className={styles.logoSpan}>Powered by JS</span>
            </div>
            <div className={styles.user}>
                <Image
                    className={styles.userImg}
                    src={'/noavatar.png'}
                    width={50}
                    height={50}
                    alt="user" 
                    priority
                />
                <div className={styles.userDetails}>
                    <span className={styles.userName}>Felix</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {MenuItems.map((menu, index) => (
                    <li key={index}>
                        <span  className={styles.category}>
                            {menu.title}
                        </span>
                        {menu.list.map((item, index) => (
                            <MenuLink key={index} item={item} />
                        ))}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>
        </div>
    )
}
export default Sidebar
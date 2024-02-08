"use client"
import styles from './navbar.module.css'

import {MdNotifications, MdOutlineChat, MdPublic, MdSearch} from 'react-icons/md'
import Breadcrumbs from '../../dashboard/breadcrumbs/breadcrumbs'
import ColorSelector from '../colorSelector/colorSelector'
const Navbar = () => {
    
    return (
        <div className={styles.container}>
            <Breadcrumbs/>
            <div className={styles.menu}>
            <ColorSelector/>
                <div className={styles.search}>
                    <MdSearch/>
                    <input type="text" 
                        name="search"
                        id="search"
                        placeholder="Search..." 
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.icons}>
                    <MdPublic size={20}/>
                    <MdNotifications size={20}/>
                    <MdOutlineChat size={20}/>
                </div>
            </div>
        </div>
    )

}
export default Navbar
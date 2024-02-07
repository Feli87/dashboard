import styles from './searchdashboardbar.module.css'
import { MdSearch } from 'react-icons/md'

const SearchDashboardBar = ({placeholder, children}) => {
    return (
        <div className={styles.searchbar}>
        <div className={styles.search}>
            <MdSearch/>
            <input type="text" 
                placeholder={placeholder} 
                className={styles.searchInput}
            />
        </div>
        <div>
            {children}
        </div>
    </div>
    )
}
export default SearchDashboardBar
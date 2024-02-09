"use client";
import styles from './searchdashboardbar.module.css'
import { MdSearch } from 'react-icons/md'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const SearchDashboardBar = ({placeholder, children}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback(async (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set('page', 1);
        if(e.target.value?.length > 1) {
            e.target.value?.length > 3 && params.set('query', e.target.value);
            replace(`${pathname}?${params.toString()}`);
        }else{
            params.delete('query');
            replace(`${pathname}?${params.toString()}`);
        }

    }, 300)

    return (
        <div className={styles.searchbar}>
        <div className={styles.search}>
            <MdSearch/>
            <input type="text" 
                onChange={handleSearch}
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
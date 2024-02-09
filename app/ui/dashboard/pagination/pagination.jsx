"use client";
import styles from './pagination.module.css';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const Pagination = ({count}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    
    const params = new URLSearchParams(searchParams);
    const page = params.get('page') || 1;
    const ITEM_PEER_PAGE = 4;
    const hasPrev = ITEM_PEER_PAGE * (parseInt(page) - 1) > 1;
    const hasNext = ITEM_PEER_PAGE * (parseInt(page) - 1) + ITEM_PEER_PAGE < count;

    const handleNext = () => {
        params.set('page', parseInt(page) + 1);
        replace(`${pathname}?${params.toString()}`);
    }
    const handlePrev = () => {
        params.set('page', parseInt(page) - 1);
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <div className={styles.container}>
            <button 
                onClick={handlePrev}
                className={styles.paginationBtn} 
                disabled={!hasPrev}
            >
                Previous
            </button>
            <div className={styles.paginationCount}>Page {page} of 10</div>
            <button 
                onClick={handleNext}
                className={styles.paginationBtn} 
                disabled={!hasNext}
            >
                Next
            </button>
        </div>
    )
}
export default Pagination
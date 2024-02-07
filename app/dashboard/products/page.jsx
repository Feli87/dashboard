import styles from '@/app/ui/dashboard/products.module.css'
import SearchDashboardBar from '@/app/ui/dashboard/searchdashboardbar/searchdashboardbar'
import Link from 'next/link'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import ProductsTable from '@/app/ui/dashboard/productstable/productstable'
const Products = () => {
    return (
        <div className={styles.container}>
            <SearchDashboardBar
                placeholder="Search Products..."
            >
                <Link
                    role='button' 
                    className={styles.addUserBtn} href="/dashboard/products/add">
                    Add Product
                </Link>
            </SearchDashboardBar>
            <ProductsTable />
            <Pagination />
        </div>
    )
}
export default Products
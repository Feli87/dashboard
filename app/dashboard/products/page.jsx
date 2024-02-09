import styles from '@/app/ui/dashboard/products.module.css'
import SearchDashboardBar from '@/app/ui/dashboard/searchdashboardbar/searchdashboardbar'
import Link from 'next/link'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import ProductsTable from '@/app/ui/dashboard/productstable/productstable'
import { fetchProducts } from '@/app/lib/data'
const Products = async  ({searchParams}) => {

    const query = searchParams?.query || '';
    const page = searchParams?.page || 1;
    const {count, products} = await fetchProducts(query, page);

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
            <ProductsTable  products={products || []}/>
            <Pagination  count={count}/>
        </div>
    )
}
export default Products
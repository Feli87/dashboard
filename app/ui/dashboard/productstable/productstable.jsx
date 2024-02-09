import Image from 'next/image'
import styles from './productstable.module.css'
import Link from 'next/link'

const ProductsTable = ({products}) => {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th align='left'>Name</th>
                        <th align='left'>Description</th>
                        <th align='left'>Price</th>
                        <th align='center'>Last updated</th>
                        <th align='center'>Stock</th>
                        <th align='center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product, index) => {
                    return (
                        <tr key={product.id || index}>
                        <td>
                            <div className={styles.product}>
                                <Image 
                                    src={product.image || '/noproduct.png'}  
                                    width={40} 
                                    height={40} 
                                    className={styles.productImg}
                                    alt="product"
                                    title={product.name}
                                />
                                <span className={styles.userName}>
                                    {product.name}
                                </span>
                            </div>
                        </td>
                        <td title={product.description}>
                            {product.description.slice(0, 60)}...
                        </td>
                        <td align='left'>
                            $ {product.price}
                        </td>
                        <td align='center'>
                        {product.createdAt && new Date(product.createdAt).toLocaleDateString('en-US',{
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        }) || ''}
                        </td>
                        <td align='center'>
                            {product.stock}
                        </td>
                        <td align='center'>
                            <Link href={`/dashboard/products/${product.id}`} className={styles.viewBtn}>
                                View
                            </Link>
                            <Link href={`/dashboard/products/${product.id}/delete`} className={styles.deletedBtn}>
                                Delete
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
export default ProductsTable
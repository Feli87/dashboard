import Image from 'next/image'
import styles from './productstable.module.css'
import Link from 'next/link'

const ProductsTable = () => {
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
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image 
                                    src={'/test_nike.webp'}  
                                    width={40} 
                                    height={40} 
                                    className={styles.productImg}
                                    alt="product"
                                    title="Nike Dunk Low Twist"
                                />
                                <span className={styles.userName}>Nike Dunk Low Twist</span>
                            </div>
                        </td>
                        <td title='El ícono del básquetbol de los 80 está de vuelta con detalles clásicos y un toque de básquetbol retro. Regresa el estilo vintage a las calles. Su cuello y su silueta acolchados te permiten llevar tu juego a cualquier parte, con comodidad.'>
                        El ícono del básquetbol de los 80 está de vuelta con detalles clásicos...
                        </td>
                        <td align='left'>
                            $ 199.999
                        </td>
                        <td align='center'>
                            February 12, 2024
                        </td>
                        <td align='center'>
                            45
                        </td>
                        <td align='center'>
                            <Link href={'/dashboard/products/1'} className={styles.viewBtn}>
                                View
                            </Link>
                            <Link href={'/dashboard/products/1/delete'} className={styles.deletedBtn}>
                                Delete
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image 
                                    src={'/test_nike_2.webp'} 
                                    width={40} 
                                    height={40} 
                                    className={styles.productImg}
                                    alt="product"
                                    title='Nike Dunk Low'
                                />
                                <span className={styles.productName}>Nike Dunk Low</span>
                            </div>
                        </td>
                        <td title='Cuero texturizado. Lona premium. Colores frescos. Este Dunk Low es un estilo discreto que añade el brillo perfecto a tu look. Con su estilo de básquetbol retro y cuello cómodo de corte low, mantuvimos todo lo que amas de este básico de estilo moderno. ¿Un toque final? Las agujetas con colores a juego traen la alegría a cada paso.'>
                            Cuero texturizado. Lona premium. Colores frescos.
                        </td>
                        <td align='left'>
                            $ 177.999
                        </td>
                        <td align='center'>
                            April 1, 2023
                        </td>
                        <td align='center'>
                            45
                        </td>
                        <td align='center'>
                            <Link href={'/dashboard/products/1'} className={styles.viewBtn}>
                                View
                            </Link>
                            <Link href={'/dashboard/products/1/delete'} className={styles.deletedBtn}>
                                Delete
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image 
                                    src={'/test_nike_3.webp'} 
                                    width={40} 
                                    height={40} 
                                    className={styles.productImg}
                                    alt="product"
                                    title='Nike Phantom GX'
                                />
                                <span className={styles.productName}>Nike Phantom GX</span>
                            </div>
                        </td>
                        <td  title='¿Quieres llevar tu juego al siguiente nivel? El calzado Academy te brinda el toque de precisión que necesitas para que tus instintos de juego más internos deslumbren. Con NikeSkin y una zona de toque de malla para una mayor precisión y una placa de agilidad diseñada para deslizarse y correr contigo, todo está listo para encender tu espíritu de juego espontáneo.'>
                            El calzado Academy te brinda el toque de precisión que necesitas.
                        </td>
                        <td align='left'>
                            $ 129.999
                        </td>
                        <td align='center'>
                            April 1, 2023
                        </td>
                        <td align='center'>
                            45
                        </td>
                        <td align='center'>
                            <Link href={'/dashboard/products/1'} className={styles.viewBtn}>
                                View
                            </Link>
                            <Link href={'/dashboard/products/1/delete'} className={styles.deletedBtn}>
                                Delete
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ProductsTable
"use client";
import { useForm } from 'react-hook-form';
import styles from '../../../ui/dashboard/product/singleProductPage.module.css'
import Image from 'next/image'
import { MdError } from 'react-icons/md';

const SingleProductPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "Default Name",
            price: "120",
            color: "#000000",
            category: "shoes",
            stock: "40",
            size: "30cm",
            description: "Lorem insup site description default test lorem ipsum description default test"
        }
    });

    const onSubmit = (data) => {
        console.log(data); // Aquí puedes enviar los datos a través de una solicitud HTTP, por ejemplo.
    };

    return (
        <form id='addproduct' name='addproduct' className={styles.form} encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>Edit Product</h2>
            <div className={styles.container}>
                <div className={styles.productImgContainer}>
                    <Image
                        id='image'
                        name='image'
                        src={'/upload_image.png'}
                        width={200}
                        height={200}
                        className={styles.productImg}
                        alt="product"
                    />
                    <span className={styles.uploadBtn}>Upload</span>
                </div>

                <div className={styles.productInfo}>
                    <div className={styles.leftColumn}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Name</label>
                            <input 
                                id='name'
                                name='name'
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && (
                                    <div className={styles.errorContainer}>
                                    <MdError className={styles.errorIcon} size={20} />
                                    <p className={styles.error}>{errors.name.message}</p>
                                </div>
                                )}
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="price">Price</label>
                            <input
                                id='price'
                                name='price'
                                type="text"
                                {...register("price", { required: "Price is required" })}
                            />
                            {errors.price && (
                                <div className={styles.errorContainer}>
                                    <MdError className={styles.errorIcon} size={20} />
                                    <p className={styles.error}>{errors.price.message}</p>
                                </div>
                            )}
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="color">Color</label>
                            <input
                                id='color'
                                name='color'
                                type="text"
                                {...register("color", { required: "Color is required" })}
                            />
                            {errors.color && (
                                <div className={styles.errorContainer}>
                                    <MdError className={styles.errorIcon} size={20} />
                                    <p className={styles.error}>{errors.color.message}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="category">Category</label>
                            <select
                                id='category'
                                name='category'
                                {...register("category", { required: "Category is required" })}
                            >
                                <option value="">Choose a category</option>
                                <option value="shoes">Shoes</option>
                                <option value="clothes">Clothes</option>
                            </select>
                            {errors.category && (
                                <div className={styles.errorContainer}>
                                    <MdError className={styles.errorIcon} size={20} />
                                    <p className={styles.error}>{errors.category.message}</p>
                                </div>
                            )}
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="stock">Stock</label>
                            <input
                                id='stock'
                                name='stock'
                                type="text"
                                {...register("stock", { required: "Stock is required" })}
                            />
                            {errors.stock && (
                                <div className={styles.errorContainer}>
                                    <MdError className={styles.errorIcon} size={20} />
                                    <p className={styles.error}>{errors.stock.message}</p>
                                </div>
                            )}
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="size">Size</label>
                            <input 
                                id='size'
                                name='size'
                                type="text" 
                                {...register("size", { required: "Size is required" })} 
                            />
                            {errors.size && (
                                <div className={styles.errorContainer}>
                                    <MdError className={styles.errorIcon} size={20} />
                                    <p className={styles.error}>{errors.size.message}</p>
                                </div>
                                )}
                        </div>
                    </div>
                    <div className={styles.bottomColumn}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id='description'
                                name='description'
                                {...register("description", { required: "Description is required" })}
                                cols="30"
                                rows="10"
                            ></textarea>
                            {errors.description && (
                                <div className={styles.errorContainer}>
                                    <MdError className={styles.errorIcon} size={20} />
                                    <p className={styles.error}>{errors.description.message}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={styles.btns}>
                <button className={styles.cancelBtn}>Cancel</button>
                <button className={styles.saveBtn}>Save</button>
            </div>
        </form>
    )
}
export default SingleProductPage

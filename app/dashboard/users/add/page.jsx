"use client";
import { useForm } from 'react-hook-form';
import styles from '@/app/ui/dashboard/users/add.module.css'
import Image from 'next/image'
import { MdError } from 'react-icons/md';

const AddUser = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Aquí puedes enviar los datos a través de una solicitud HTTP, por ejemplo.
    };

    return (
        <form className={styles.form} encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Add new User</h2>
        <div className={styles.container}>
            <div className={styles.productImgContainer}>
                <Image
                    src={'/noavatar.png'}
                    width={200}
                    height={200}
                    className={styles.productImg}
                    alt="user"
                />
                <span className={styles.uploadBtn}>Upload</span>
            </div>

            <div className={styles.productInfo}>
                <div className={styles.leftColumn}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input 
                            type="text"
                            {...register("name", { required: "Full Name is required" })}
                            />
                            {errors.name && (
                                <div className={styles.errorContainer}>
                                <MdError className={styles.errorIcon} size={20} />
                                <p className={styles.error}>{errors.name.message}</p>
                            </div>
                            )}
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="price">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <div className={styles.errorContainer}>
                                <MdError className={styles.errorIcon} size={20} />
                                <p className={styles.error}>{errors.email.message}</p>
                            </div>
                        )}
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="color">Tel</label>
                        <input
                            type="text"
                            {...register("tel", { required: "Tel is required" })}
                        />
                        {errors.tel && (
                            <div className={styles.errorContainer}>
                                <MdError className={styles.errorIcon} size={20} />
                                <p className={styles.error}>{errors.tel.message}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="category">Role</label>
                        <select
                            {...register("role", { required: "Role is required" })}
                        >
                            <option value="">Select role</option>
                            <option value="shoes">User</option>
                            <option value="clothes">Admin</option>
                        </select>
                        {errors.role && (
                            <div className={styles.errorContainer}>
                                <MdError className={styles.errorIcon} size={20} />
                                <p className={styles.error}>{errors.role.message}</p>
                            </div>
                        )}
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="stock">Direction</label>
                        <input
                            type="text"
                            {...register("dir", { required: "Direction is required" })}
                        />
                        {errors.dir && (
                            <div className={styles.errorContainer}>
                                <MdError className={styles.errorIcon} size={20} />
                                <p className={styles.error}>{errors.dir.message}</p>
                            </div>
                        )}
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="size">Country</label>
                        <input type="text" {...register("country", { required: "Country is required" })} />
                        {errors.country && (
                            <div className={styles.errorContainer}>
                                <MdError className={styles.errorIcon} size={20} />
                                <p className={styles.error}>{errors.country.message}</p>
                            </div>
                            )}
                    </div>
                </div>
                <div className={styles.bottomColumn}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="description">Comments</label>
                        <textarea
                            {...register("comments", { required: "Comments is required" })}
                            cols="30"
                            rows="10"
                        ></textarea>
                        {errors.comments && (
                            <div className={styles.errorContainer}>
                                <MdError className={styles.errorIcon} size={20} />
                                <p className={styles.error}>{errors.comments.message}</p>
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
export default AddUser

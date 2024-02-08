"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '@/app/ui/dashboard/users/add.module.css'
import Image from 'next/image'
import { MdError, MdRemoveCircle } from 'react-icons/md';

const AddUser = () => {
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // Store selected image data

    // Handle file selection
    const handleFileChange = (event) => {
        console.log("🚀 ~ handleFileChange ~ event:", event.target.files[0])
        const selectedFile = event.target.files[0]; // Get the first selected file
        if (!selectedFile) return; // Handle error or empty selection

        // Validate file type and size
        if (!['image/jpeg', 'image/png', 'image/webp'].includes(selectedFile.type)) {
            alert('Only JPEG and PNG images are allowed.');
            return;
        }

        if (selectedFile.size > 2 * 1024 * 1024) { // 2MB limit
            alert('Image size must be less than 2MB.');
            return;
        }

        setSelectedImage(URL.createObjectURL(selectedFile)); // Store selected file data
    };
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Aquí puedes enviar los datos a través de una solicitud HTTP, por ejemplo.
    };
    // Handle drop event
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (!droppedFile) return;
        handleFileChange({ target: { files: [droppedFile] } });
        setIsDraggingOver(false);
    };

    return (
        <form id='adduser' name='adduser' className={styles.form} encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>Add new User</h2>
            <div className={styles.container}>
                <div 
                    className={`${styles.userImgContainer} ${isDraggingOver ? styles.draggingOver : ''} `}  
                    onDrop={handleDrop}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setIsDraggingOver(true); // Set dragging over to true when dragging over
                    }}
                    onDragLeave={() => setIsDraggingOver(false)} 
                    >
                    <Image
                        src={selectedImage ? selectedImage : '/noavatar.png'}
                        width={200}
                        height={200}
                        className={styles.userImg}
                        alt="user"
                    />
                    <input 
                        id="image"
                        name="image"
                        type="file" 
                        onChange={handleFileChange} 
                        className={styles.uploadInput}
                    />
                    <span className={styles.uploadBtn}>{
                        selectedImage ? 'Change Image' : 'Add Image'
                    }</span>
                    {selectedImage && (
                        <div 
                        title='Remove Image'
                        className={styles.removeBtn} >
                        <MdRemoveCircle 
                            onClick={() => setSelectedImage(null)} 
                            size={20} 
                        />
                    </div>
                    )}
                    
                </div>

                <div className={styles.userInfo}>
                    <div className={styles.leftColumn}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                id='name'
                                name='name'
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
                                id='email'
                                name='email'
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
                                id='tel'
                                name='tel'
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
                                id='role'
                                name='role'
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
                            <label htmlFor="stock">Address</label>
                            <input
                                id='address'
                                name='address'
                                type="text"
                                {...register("address", { required: "Address is required" })}
                            />
                            {errors.address && (
                                <div className={styles.errorContainer}>
                                    <MdError className={styles.errorIcon} size={20} />
                                    <p className={styles.error}>{errors.address.message}</p>
                                </div>
                            )}
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="size">Country</label>
                            <input
                                id='country'
                                name='country'
                                type="text" {...register("country", { required: "Country is required" })} />
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
                                id='comments'
                                name='comments'
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

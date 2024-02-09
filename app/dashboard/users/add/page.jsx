import styles from '../../../ui/dashboard/users/add.module.css'
import { adduser } from '../../../lib/actions';

const AddUser =  () => {


    return (
        <form id='adduser' name='adduser' className={styles.form}  action={adduser}>
            <h2 className={styles.title}>Add new User</h2>
            <div className={styles.container}>

                <div className={styles.userInfo}>
                    <div className={styles.leftColumn}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                id='username'
                                name='username'
                                type="text"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Password</label>
                            <input
                                id='password'
                                name='password'
                                type="password"
                            />
                        </div>
                        
                        <div className={styles.inputGroup}>
                            <label htmlFor="price">Email</label>
                            <input
                                id='email'
                                name='email'
                                type="email"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="color">Phone</label>
                            <input
                                id='phone'
                                name='phone'
                                type="text"
                            />
                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="category">Role</label>
                            <select
                                id='role'
                                name='role'
                            >
                                <option value="">Choose a role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="stock">Address</label>
                            <input
                                id='address'
                                name='address'
                                type="text"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="size">Country</label>
                            <input
                                id='country'
                                name='country'
                                type="text"
                            />
                        </div>
                    </div>
                    <div className={styles.bottomColumn}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="description">Comments</label>
                            <textarea
                                id='comments'
                                name='comments'
                                cols="30"
                                rows="10"
                            ></textarea>
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
export default AddUser;

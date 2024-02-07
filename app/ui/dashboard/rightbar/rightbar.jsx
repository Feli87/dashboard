import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.itemImage}>
                <div className={styles.bgContainer}>
                    <Image
                        src={'/card_bg.webp'}
                        fill
                        className={styles.bg}
                        alt="user"
                    />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥Exclusive Offer: Boost Your Productivity!</span>
                    <h3 className={styles.title}>
                        How to Unlock the secrets to mastering?
                    </h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>
                    Unlock the secrets to mastering our revamped admin dashboard in just 4 minutes! Dive into our quick tutorial and discover how to leverage its enhanced features for maximum efficiency. Seamlessly manage your tasks, streamline workflows, and stay ahead of the curve with our intuitive guide. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quidem lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quidem.
                    </p>
                    <button className={styles.buttonWatch}>
                        <MdPlayCircleFilled size={20} />
                        Watch Video
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Hot off the Press</span>
                    <h3 className={styles.title}>
                        Get Ahead with Our New Admin Dashboard!
                    </h3>
                    <span className={styles.subtitle}>Takes 5 minutes to learn</span>
                    <p className={styles.description}>
                    Ready to elevate your productivity? Learn the ins and outs of our latest admin dashboard version in just 4 minutes! From organizing your tasks to optimizing workflows, our quick tutorial will have you navigating the dashboard like a pro in no time. Dont miss out on this opportunity to supercharge your efficiency and stay ahead of the curve. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quidem lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quidem.
                    </p>
                    <button className={styles.buttonWatch}>
                        <MdReadMore size={20} />
                        <span>Reed More</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Rightbar
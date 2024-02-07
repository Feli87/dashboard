"use client"
import { usePathname } from 'next/navigation'
import styles from './breadcrumbs.module.css'
import { MdHomeFilled } from 'react-icons/md';

const Breadcrumbs = () => {
    const pathname = usePathname();

    const generateBreadcrumbs = (pathname) => {
        const breadcrumbs = [];
        // Eliminar partes vacías
        const pathParts = pathname.split('/').filter(part => part !== '');
        let accumulatedPath = '';

        for (const part of pathParts) {
            accumulatedPath += `/${part}`;
            breadcrumbs.push({ label: part, path: accumulatedPath });
        }

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs(pathname);

    return (
        <nav aria-label="breadcrumbs" className={styles.container}>
        <MdHomeFilled size={20} className={styles.icon}/>
            <ol className={styles.list}>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li className={styles.item} key={index}>
                        <a href={breadcrumb.path}>{index !== 0 ? (
                            <span className={styles.icon}> /</span>
                        ) : '	'}{breadcrumb.label}</a>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

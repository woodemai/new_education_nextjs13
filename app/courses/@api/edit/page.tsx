'use client';
import styles from '../../modal.module.css'
import {useRouter} from "next/navigation";

export default function Edit() {
    const router = useRouter();
    const goBack = () => {
        router.back()
    }
    return (
        <div className={styles.modal} onClick={goBack}>
            <div className={styles.inner} onClick={event => event.stopPropagation()}>
                <button className={styles.closeBtn} onClick={goBack}>Close</button>
            </div>
        </div>
    )
}
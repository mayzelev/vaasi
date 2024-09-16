import styles from './LineTitle.module.css';

export default function LineTitle({ thinWidth = 131.5, thickWidth = 71 }) {
    return (
        <div className={styles.line}>
            <div className={styles.thin} style={{ maxWidth: `${thinWidth}px` }} />
            <div className={styles.thick} style={{ maxWidth: `${thickWidth}px` }} />
            <div className={styles.thin} style={{ maxWidth: `${thinWidth}px` }} />
        </div>
    );
}

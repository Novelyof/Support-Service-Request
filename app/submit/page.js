import styles from '../styles/Submit.module.css';

const Submit = () => {
    return (
        <div className={styles.backgroundImage}>
            <div className={styles.headerBox}>
                <div className={styles.backButton}>
                    <a href="/home">&#8592; Back to Home</a>
                </div>
                <h1 className={styles.headerText}>Hello Yulio, What’s Your Problem? You Can Fill This Form</h1>
            </div>
            <div className={styles.inputSection}>
                <div className={styles.basicAndStatus}>
                    <div className={styles.basicInformation}>
                        <h2>Basic Information</h2>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Phone Number" />
                        <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className={styles.statusRequest}>
                        <h2>Status Request</h2>
                        <input type="text" value="Draft" disabled />
                    </div>
                </div>
                <div className={styles.detailInformation}>
                    <h2>Detail Information Request</h2>
                    <input type="text" placeholder="Field Atas Tengah" />
                    <div className={styles.columnsWrapper}>
                        <div className={styles.column}>
                            <input type="text" placeholder="Field 1" />
                            <input type="text" placeholder="Field 4" />
                            <input type="text" placeholder="Field 7" />
                        </div>
                        <div className={styles.column}>
                            <input type="text" placeholder="Field 2" />
                            <input type="text" placeholder="Field 5" />
                            <input type="text" placeholder="Field 8" />
                        </div>
                        <div className={styles.column}>
                            <input type="text" placeholder="Field 3" />
                            <input type="text" placeholder="Field 6" />
                            <input type="text" placeholder="Field 9" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Submit;

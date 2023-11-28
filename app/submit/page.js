import styles from '../styles/Submit.module.css';
import Image from 'next/image';

const Submit = () => {
    return (
        <div className={styles.backgroundImage}>
            <div className={styles.headerBox}>
                <div className={styles.backButton}>
                    <a href="/home">Back</a>
                </div>
                <h1 className={styles.headerText}>Hello Yulio, What’s Your Problem? You Can Fill This Form</h1>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/GambarSubmit.png" // Ganti dengan path gambar Anda
                            alt="Description of the image"
                            width={250}
                            height={250}
                        />
                    </div>
            </div>

            <div className={styles.content}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Basic Information</h2>
                    <div className={styles.columnsContainer}>
                        <div className={styles.column}>
                            <label>Label 1:</label>
                            <input type="text" placeholder="First Name" className={styles.inputField} />
                            <label>Label 3:</label>
                            <input type="text" placeholder="Last Name" className={styles.inputField} />
                        </div>
                        <div className={styles.column}>
                            <label>Label 2:</label>
                            <input type="text" placeholder="Email" className={styles.inputField} />
                            <label>Label 4:</label>
                            <input type="text" placeholder="Phone Number" className={styles.inputField} />
                        </div>
                    </div>
                </div>
                <div className={styles.statusContainer}>
                    <div className={styles.draftField}>
                        Status Request 
                    </div>
                    <div className={styles.statusRequest}>
                        Draft
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Submit;

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
                
                <div className={styles.detailInformation}>
                    <h2>Detail Information Request</h2>
                    <input type="text" placeholder="Field Sebelum Kolom Pertama" className={styles.inputField} />
                    <div className={styles.detailColumnsContainer}>
                        {/* Kolom pertama */}
                        <div className={styles.detailColumn}>
                            <label>Field 1:</label>
                            <input type="text" placeholder="Field 1" className={styles.inputField} />
                            <label>Field 4:</label>
                            <input type="text" placeholder="Field 4" className={styles.inputField} />
                            <label>Field 7:</label>
                            <input type="text" placeholder="Field 7" className={styles.inputField} />
                        </div>
                        
                        {/* Kolom kedua */}
                        <div className={styles.detailColumn}>
                            <label>Field 2:</label>
                            <input type="text" placeholder="Field 2" className={styles.inputField} />
                            <label>Field 5:</label>
                            <input type="text" placeholder="Field 5" className={styles.inputField} />
                            <label>Field 8:</label>
                            <input type="text" placeholder="Field 8" className={styles.inputField} />
                        </div>
                        
                        {/* Kolom ketiga */}
                        <div className={styles.detailColumn}>
                            <label>Field 3:</label>
                            <input type="text" placeholder="Field 3" className={styles.inputField} />
                            <label>Field 6:</label>
                            <input type="text" placeholder="Field 6" className={styles.inputField} />
                            <label>Field 9:</label>
                            <input type="text" placeholder="Field 9" className={styles.inputField} />
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Submit;

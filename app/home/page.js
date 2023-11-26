import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () =>{
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <p className={styles.boxText}>Welcome, Yulio</p>
        <p className={styles.boxText}>You Have a Problem in Office? You can Report to us</p>
      </div>
      <div className={styles.backgroundImage}></div>
      <div className={styles.imageGrid}>
        {/* Tiga gambar */}
        <Link href="/submit">
          <div className={styles.imageItem}>
            <img src="Submit.png" alt="Gambar 1"/>
            <p>Submit</p>
          </div>
        </Link>
        <Link href="/faqs">
          <div className={styles.imageItem}>
            <img src="FAQs.png" alt="Gambar 2"/>
            <p>FAQs</p>
          </div>
        </Link>
        <Link href="/feedback">
          <div className={styles.imageItem}>
            <img src="Feedback.png" alt="Gambar 3"/>
            <p>Feedback</p>
          </div>
        </Link>
      </div>
      <div className={styles.tableContainer}>
        {/* Tabel */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Kolom 1</th>
              <th>Kolom 2</th>
              <th>Kolom 3</th>
              <th>Kolom 4</th>
              <th>Kolom 5</th>
            </tr>
          </thead>
          <tbody>
            {/* Baris 1 */}
            <tr>
              <td>Baris 1, Kolom 1</td>
              <td>Baris 1, Kolom 2</td>
              <td>Baris 1, Kolom 3</td>
              <td>Baris 1, Kolom 4</td>
              <td>Baris 1, Kolom 5</td>
            </tr>
            {/* Baris 2 */}
            <tr>
              <td>Baris 2, Kolom 1</td>
              <td>Baris 2, Kolom 2</td>
              <td>Baris 2, Kolom 3</td>
              <td>Baris 2, Kolom 4</td>
              <td>Baris 2, Kolom 5</td>
            </tr>
            {/* Baris 3 */}
            <tr>
              <td>Baris 3, Kolom 1</td>
              <td>Baris 3, Kolom 2</td>
              <td>Baris 3, Kolom 3</td>
              <td>Baris 3, Kolom 4</td>
              <td>Baris 3, Kolom 5</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.expandRow}>
        --Expand--
      </div>
      </div>
    </div>
  );
};

export default Home;

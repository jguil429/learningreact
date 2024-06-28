import styles from './Card.module.css';
import profilePic from '../assets/port-3b.jpg';

function Card() {
    return (
        <div className={ styles.card }>
            <img className={styles.cardimg} src={profilePic} alt="profile picture"></img>
            <h2 className={styles.cardtitle}>Jennie</h2>
            <p className={styles.cardtext}>I am learning to code and am an aerialist.</p>
        </div>
    );
}

export default Card
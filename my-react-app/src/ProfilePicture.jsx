import styles from './Card/Card.module.css';



function ProfilePicture() {
    const imageUrl = './assets/port-1.jpg'

    const handleClick = (e) => e.target.style.display = "none";

    return (<img onClick={(e) => handleClick(e) } className={styles.card} src={imageUrl}></img>)
}

export default ProfilePicture
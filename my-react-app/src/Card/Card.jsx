import styles from './Card.module.css';
import profilePic from '../assets/port-3b.jpg';

function Card() {
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Jennie</h2>
            <p className="card-text">I am learning to code and am an aerialist.</p>
        </div>
    );
}

export default Card
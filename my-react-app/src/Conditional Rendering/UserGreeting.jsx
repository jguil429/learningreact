import styles from './UserGreeting.module.css';
import PropTypes from 'prop-types';


function UserGreeting(props) {

    // if (props.isLoggedIn) {
    //     return <h2>Welcome { props.username }</h2>
    // }
    // else {
    //     return <h2>Please log in to continue.</h2>
    // }

    const welcomeMessage = <h2 className={styles.welcomemessage}>
                            Welcome { props.username } </h2>
    
    const loginPrompt = <h2 className={styles.loginprompt}>
                        Please login to continue.</h2>

    return (props.isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

export default UserGreeting
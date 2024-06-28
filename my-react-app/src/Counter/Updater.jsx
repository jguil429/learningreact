import React, { useState } from 'react';
import styles from './Counter.module.css'

function Updater() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className={styles.countercontainer}>
            <p className={styles.countdisplay}>{ count }</p>
            <button className={styles.counterbutton} onClick={ decrement }>Decrement</button>
            <button className={styles.counterbutton} onClick={ reset }>Reset</button>
            <button className={styles.counterbutton} onClick={increment }>Increment</button>
        </div>
    )
}

export default Updater
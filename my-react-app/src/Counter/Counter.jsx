import React, { useState } from 'react';
import styles from './Counter.module.css'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
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

export default Counter
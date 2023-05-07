import React from 'react';
import styles from '../components/Welcome.module.css'

// Cambia todo esto para hacerlo más personal.
export const WelcomeScreen = ({ Start }) => {
    return (
        <>
        <div className={styles.welcomeBg}>
            <div className={styles.welcomeWrapper}>
                <div className={styles.welcomeTop}>
                    <div>
                        <h1>V<span>oi</span>d.</h1>
                    </div>
                </div>
                <div className={styles.welcomeBottom}>
                    <p>
                        Although deriberately vague and ambiguous, the Tao The Ching stated that
                        all things are unified and connected in the Tao. Would you want to forget
                        for some minutes the stress we are all exposed to and empty your mind?
                    </p>
                    <button onClick={Start} className={styles.welcomeBtn}>
                        Let's go.
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default WelcomeScreen;
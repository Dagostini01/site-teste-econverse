import styles from '../Parceiros/parceiros.module.scss'

function Parceiros() {

    return (
        <section className={styles.principal}>
            <nav className={styles.imageWithText}>
                <img src={require("./images/group2.png")}/>
                <div className={styles.textOverlay}>
                    <h2>Parceiros</h2>
                    <p className={styles.txt}>Lorem ipsum dolor sit</p>
                    <p className={styles.txt}>amet, consectetur</p>
                    <button className={styles.btn}>CONFIRA</button>
                </div>
            </nav>
            <nav className={styles.imageWithText}>
                <img src={require("./images/group2.png")}/>
                <div className={styles.textOverlay}>
                    <h2>Parceiros</h2>
                    <p className={styles.txt}>Lorem ipsum dolor sit</p>
                    <p className={styles.txt}>amet, consectetur</p>
                    <button className={styles.btn}>CONFIRA</button>
                </div>
            </nav>

            <div>

            </div>
        </section>
    );
}

export default Parceiros;

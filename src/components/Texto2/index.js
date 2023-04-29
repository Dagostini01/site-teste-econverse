import styles from '../Texto2/texto2.module.scss'

function Texto2() {

    return (
        <section className={styles.principal}>
            <nav>
                <h1 className={styles.titulo}>Navegue por marcas</h1>
            </nav>

            <nav className={styles.logos}>
                <div className={styles.logo}><img src={require("./images/Group 35.png")} /></div>
                <div className={styles.logo}><img src={require("./images/Group 35.png")} /></div>
                <div className={styles.logo}><img src={require("./images/Group 35.png")} /></div>
                <div className={styles.logo}><img src={require("./images/Group 35.png")} /></div>
                <div className={styles.logo}><img src={require("./images/Group 35.png")} /></div>
            </nav>

        </section>
    );
}

export default Texto2;

import styles from '../Produtos/produtos.module.scss'

function Produtos() {

    return (
        <section className={styles.principal}>
            <nav className={styles.imageWithText}>
                <img src={require("./images/group.png")}/>
                <div className={styles.textOverlay}>
                    <h2 className={styles.texto}>Produtos</h2>
                    <p className={styles.txt}>Lorem ipsum dolor sit</p>
                    <p className={styles.txt}>amet, consectetur</p>
                    <button className={styles.btn}>CONFIRA</button>
                </div>
            </nav>
            <nav className={styles.imageWithText}>
                <img src={require("./images/group.png")}/>
                <div className={styles.textOverlay}>
                    <h2 className={styles.texto}>Produtos</h2>
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

export default Produtos;

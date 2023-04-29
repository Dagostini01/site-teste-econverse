import styles from '../Texto/texto.module.scss'

function Texto() {

    return (
        <section className={styles.principal}>
            <nav>
                <h1 className={styles.titulo}>Produtos relacionados</h1>
                <p className={styles.txt}>Ver todos</p>
            </nav>
        </section>
    );
}

export default Texto;

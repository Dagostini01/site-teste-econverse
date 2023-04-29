import styles from '../Navigation2/navigation2.module.scss'

function Navigation2() {

    return (

        <section>
            <nav className={styles.father}>
                <h1 className={styles.color}>Produtos relacionados</h1>
                <div className={styles.navigation}>
                    <div className={styles.box}> <p className={styles.color}>CELULAR</p> </div>
                    <div className={styles.box}> <p>ACESSÓRIOS</p> </div>
                    <div className={styles.box}> <p>TABLETS</p> </div>
                    <div className={styles.box}> <p>NOTEBOOKS</p> </div>
                    <div className={styles.box}> <p>TVS</p> </div>
                    <div className={styles.box}> <p>VER TODOS</p> </div>
                </div>
            </nav>
        </section>

    )

}

export default Navigation2
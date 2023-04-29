import styles from '../Navigation/navigation.module.scss'

function Navigation() {

    return (

        <section>
            <nav className={styles.navigation} > 

                <div className={styles.box}>
                    <div className={styles.color}>
                        <img src={require("./images/monitorar-tablet-e-smartohone 1.png")} className={styles.img}/>
                    </div>
                    <p className={styles.txt}><span className={styles.color2}>Tecnologia</span></p>
                </div>

                <div className={styles.box}>
                    <div className={styles.color}>
                        <img src={require("./images/supermercados 1.png")}/>
                    </div>
                    <p className={styles.txt}>Mercado</p>
                </div>

                <div className={styles.box}>
                    <div className={styles.color}>
                        <img src={require("./images/whiskey.png")}/>
                    </div>
                    <p className={styles.txt}>Bebidas</p>
                </div>

                <div className={styles.box}>
                    <div className={styles.color}>
                        <img src={require("./images/ferramentas 1.png")}/>
                    </div>
                    <p className={styles.txt}>Ferramenta</p>
                </div>

                <div className={styles.box}>
                    <div className={styles.color}>
                        <img src={require("./images/cuidados-de-saude 1 (1).png")}/>
                    </div>
                    <p className={styles.txt}>Saúde</p>
                </div>

                <div className={styles.box}>
                    <div className={styles.color}>
                        <img src={require("./images/corrida 1.png")}/>
                    </div>
                    <p className={styles.txt}>Esporte</p>
                </div>

                <div className={styles.box}>
                    <div className={styles.color}>
                        <img src={require("./images/moda 1.png")}/>
                    </div>
                    <p className={styles.txt}>Moda</p>
                </div>

            </nav>
        </section>

    )

}

export default Navigation
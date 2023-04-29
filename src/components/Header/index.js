import styles from '../Header/header.module.scss'

function Header() {

    return (
        <header>

            <section className={styles.header2}>
                <nav className={styles.header2}>
                    <img src={require("./images/ShieldCheck (1).png")}/>
                    <p className={styles.txt}>Compra <span className={styles.span}>100% segura</span> </p>
                </nav>
                <nav className={styles.header2}>
                    <img src={require("./images/Truck.png")}/>
                    <p className={styles.txt}><span className={styles.span}>Frete grátis</span> acima de R$ 200</p>
                </nav>
                <nav className={styles.header2}>
                    <img src={require("./images/CreditCard.png")}/>
                    <p className={styles.txt}><span className={styles.span}>Parcele</span> suas compras</p>
                </nav>
            </section>

            <section className={styles.header}>
                <nav>
                    <img src={require("./images/Group 35.png")}/>
                </nav>
                <nav className={styles.header}>
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="O que você está buscando?" />
                    </div>
                    <div className={styles.searchBar}>
                        <button className={styles.searchBar.button}>
                            <img src={require("./images/MagnifyingGlass.png")} />
                        </button>
                    </div>
                </nav>
                <nav className={styles.iconsRight}>
                    <div className = {styles.btn2}>
                        <button className={styles.button2}>
                            <img src={require("./images/Group.png")} className={styles.btnimg}/>
                        </button>
                    </div>
                    <div className = {styles.btn2}>
                        <button className={styles.button2}>
                            <img src={require("./images/Heart.png")} className={styles.btnimg}/>
                        </button>
                    </div>
                    <div className = {styles.btn2}>
                        <button className={styles.button2}>
                            <img src={require("./images/UserCircle.png")} className={styles.btnimg} />
                        </button>
                    </div>
                    <div className = {styles.btn2}>
                        <button className={styles.button2}>
                            <img src={require("./images/ShoppingCart.png")} className={styles.btnimg} />
                        </button>
                    </div>
                </nav>

            </section>

            <section className={styles.header3}>
                <p>TODAS CATEGORIAS</p>
                <p>SUPERMERCADO</p>
                <p>LIVROS</p>
                <p>MODA</p>
                <p>LANÇAMENTOS</p>
                <p><span className={styles.span}>OFERTAS DO DIAS</span></p>
            </section>

            <section className={styles.imageWithText}>
                <img src={require("./images/Rectangle 250.png")}/>
                <div className={styles.textOverlay}>
                    <p>Venha conhecer nossas</p>
                    <p>promoções</p>
                    <p className={styles.txtp}>50% Off nos produtos</p>
                    <div className={styles.btnOverlay}> <p>Ver produto</p> </div>
                </div>
            </section>

        </header>
    )
}

export default Header
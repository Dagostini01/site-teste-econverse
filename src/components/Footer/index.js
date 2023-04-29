import styles from '../Footer/footer.module.scss'

function Footer() {

    return (
        <section className={styles.principal0}>
            <nav className={styles.principal1}>
                <p className={styles.p1}>Sobre nós</p>
                <p className={styles.p2}>CONHEÇA</p>
                <p className={styles.p2}>COMO COMPRAR</p>
                <p className={styles.p3}>INDICAÇÃO E DESCONTO</p>
                    <div className={styles.imgs}>
                        <img src={require('./images/Vector (4).png')}/>
                        <img src={require('./images/044-instagram.png')}/>
                        <img src={require('./images/Vector (6).png')}/>
                    </div>
            </nav>
            <nav className={styles.principal2}>
                <p className={styles.p1}>INFORMAÇÕES ÚTEIS</p>
                <p className={styles.p22}>FALE CONOSCO</p>
                <p className={styles.p22}>DÚVIDAS</p>
                <p className={styles.p22}>PRAZOS DE ENTREGA</p>
                <p className={styles.p22}>FORMAS DE PAGAMENTO</p>
                <p className={styles.p22}>POLÍTICA DE PRIVACIDADE</p>
                <p className={styles.p22}>TROCAS E DEVOLUÇÕES</p>
            </nav>
            <nav className={styles.principal3}>
                <p className={styles.p13} >FORMAS DE PEGAMENTO</p>
                <img src={require('./images/formas_pagamento.png')}/>
            </nav>

            <nav className={styles.principal4}>
                <div className={styles.child4}>
                    <h3>CADASTA-SE E RECEBA</h3>
                    <h2>NOSSAS PROMOÇÕES</h2>
                    <p className={styles.txt}>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem</p>
                    
                    <div className={styles.btn}>
                        <input/>
                        <button className={styles.btn2}>Ok</button>
                    </div>

                </div>
            </nav>

        </section>
    );
}

export default Footer;

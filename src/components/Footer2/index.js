import styles from '../Footer2/footer2.module.scss'

function Footer2() {

    return (
        <section className={styles.principal0}>
            <nav className={styles.principal1}>
                <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
            </nav>
            <nav>
                <img src={require('./images/Group 831.png')} />
            </nav>

        </section>
    );
}

export default Footer2;

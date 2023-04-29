import styles from '../Card/card.module.scss';


function Modal({ product, onClose }) {
    return (
        <section className={styles.box}>
            <img src={product.photo} />
            <p className={styles.nome}>{product.productName}</p>
            <p className={styles.preco}>R$ {product.price}</p>
            <p className={styles.preco2}>ou 2x de {product.price / 2} sem juros</p>
            <p className={styles.frete}>Frete grátis</p>
            <button className={styles.btn} onClick={onClose}>Fechar</button>
        </section>
    );
}

export default Modal;
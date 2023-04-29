import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Card/card.module.scss';
import Modal from './Modal';

function Card() {
    const [produto, setProduto] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axios
            .get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
            .then((response) => {
                setProduto(response.data.products.slice(0, 4));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={styles.div}>
            {selectedProduct !== null ? (
                <div className={styles.modal}>
                    <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
                </div>
            ) : (
                produto.map((p, key) => {
                    return (
                        <section className={styles.box}>
                            <img src={p.photo} />
                            <p className={styles.nome}>{p.productName}</p>
                            <p className={styles.preco}>R$ {p.price}</p>
                            <p className={styles.preco2}>ou 2x de {p.price / 2} sem juros</p>
                            <p className={styles.frete}>Frete grátis</p>
                            <button className={styles.btn} onClick={() => setSelectedProduct(p)}>
                                Comprar
                            </button>
                        </section>
                    );
                })
            )}
        </div>
    );
}

export default Card;

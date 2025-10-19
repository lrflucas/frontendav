import styles from './CardCarro.module.css'

const CardCarro = ({ modelo, marca, preco }) => {

    return (
        <div className={styles.card}>
            <h2 className={styles.titulo}>{modelo}</h2>
            <p>{marca}</p>
            <p className={styles.preco}>Preço: R${preco}</p>
        </div>
    );
};

export default CardCarro;
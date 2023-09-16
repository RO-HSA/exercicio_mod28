import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <h1>Calculadora IMC</h1>
                <p>Preencha altura, peso e descubra seu IMC</p>
            </div>
        </header>

    )
}

export default Header
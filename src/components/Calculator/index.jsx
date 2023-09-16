import { useEffect, useState } from 'react'
import styles from './Calculator.module.css'

const Forms = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setIMC] = useState(0);
    const [classificacao, setClassificacao] = useState('');

    useEffect(() => {
        setIMC(calculaImc(altura, peso));
        setClassificacao(determinaClassificacao(imc));
    }, [altura, peso, imc])
    
    
    const calculaImc = (altura, peso) => {
        return peso / (altura * altura);
    }

    const determinaClassificacao = (imcValue) => {
        switch(true) {
            case (imcValue < 18.5):
                return 'Abaixo do peso';
            case (imcValue >= 18.5 && imcValue < 25):
                return 'Peso normal';
            case (imcValue >= 25 && imcValue < 30):
                return 'Pré-obesidade';
            case (imcValue >= 30 && imcValue < 35):
                return 'Obesidade Grau 1';
            case (imcValue >= 35 && imcValue < 40):
                return 'Obesidade Grau 2';
            case (imcValue > 40):
                return 'Obesidade Grau 3';
        }
    }
    
    return (
        <>
            <form className={styles.form}>
                <input onChange={event => setAltura(parseFloat(event.target.value))} className={styles.formInput} type="number" placeholder="Altura" />
                <input onChange={event => setPeso(parseFloat(event.target.value))} className={styles.formInput} type="number" placeholder="Peso" />
            </form>
            <div className={styles.outputContainer}>
                <p>
                    IMC: {isNaN(imc) ? 0 : imc.toFixed(2)}
                </p>
                <p>Classificação: {classificacao}</p>
            </div>
        </>
    )
}

export default Forms
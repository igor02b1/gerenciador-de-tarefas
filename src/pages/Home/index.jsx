import styles from './styles.module.css';

export default function Home() {
    return (
        <div className={styles.container}>      
            <div className={styles.container_form}>
                <form className={styles.form} onSubmit={(event) => console.log("teste")} >
                    <h2>Nova tarefa</h2>

                    <input placeholder="Titúlo"/>
                    
                    <select>
                        <option>trabalhar</option>
                        <option>estudar</option>
                    </select>      

                    <input type="date" placeholder="data"/>

                    <input placeholder="descrição"/>

                    <button type="submit">salvar</button>
                </form>
            </div>

            <div className="container-list">
                <h3>lista de tarefas</h3>
            </div>
        </div>
    )
}
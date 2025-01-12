import styles from './styles.module.css';
import { useState } from 'react';

export default function Home() {
    const [titulo, setTiluto] = useState("");
    const [categoria, setCategoria] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");


    //{ titulo: "", categoria: "", data: "", descricao: ""}
    const [tarefas, setTarefas] = useState([])

    function salvarTarefas(event){
        event.preventDefault();
        const copy = [...tarefas]
        copy.push({titulo: titulo,
            categoria: categoria,
            data: data,
            descricao: descricao
        })
        setTarefas(copy)

        setTiluto("");
        setCategoria("");
        setData("");
        setDescricao("");
    }

    function apagarTarefa(indexTarefa){
        const arrayFiltrado = tarefas.filter((tarefas, index) => indexTarefa !== index);
        setTarefas(arrayFiltrado);
    }


    return (
        <div className={styles.container}>      
            <div className={styles.container_form}>
                <form className={styles.form} onSubmit={(event) => salvarTarefas(event)} >
                    <h2>Nova tarefa</h2>

                    <input value={titulo}
                     onChange={(event) =>setTiluto(event.target.value)}
                     placeholder="Titúlo"
                    />
                    
                    <select 
                      value={categoria}
                      onChange={(event) =>setCategoria(event.target.value)}>
                        <option value={""} disabled>selecione um item...</option>
                        <option>trabalhar</option>
                        <option>estudar</option>
                    </select>      

                    <input
                        typeof='date'
                        value={data}
                        onChange={(event) =>setData(event.target.value)} 
                        type="date" 
                        placeholder="data"
                    />

                    <input
                        value={descricao}
                        onChange={(event) =>setDescricao(event.target.value)} 
                        placeholder="descrição"
                    />

                    <button type="submit">salvar</button>
                </form>
            </div>

            <div className={styles.container_list}>
                <div className={styles.container_title}>
                    <h3>lista de tarefas</h3>
                    <p>Total: {tarefas.length}</p>
                </div>

                {tarefas.map((tarefa, index) => (
                <div className={styles.card}>
                    <div>
                        <p className={styles.bold}>{tarefa.titulo}</p>
                        <p>Categoria: {tarefa.categoria}</p>
                        <p>descrição da tarefa: {tarefa.descricao} </p>
                    </div>

                    <div className={styles.card_info_right}>
                        <p className={styles.bold}>{tarefa.data}</p>
                        <button onClick={()=>apagarTarefa(index)}>excluir</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}